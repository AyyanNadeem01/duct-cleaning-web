import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import AdminUser from '@/models/AdminUser';
import { comparePassword, signToken } from '@/lib/auth';

export async function POST(req: Request) {
  await connect();
  const body = await req.json();
  const { username, password } = body;
  if (!username || !password) return NextResponse.json({ error: 'username and password required' }, { status: 400 });

  const user = await AdminUser.findOne({ username });
  if (!user) return NextResponse.json({ error: 'invalid credentials' }, { status: 401 });

  const ok = await comparePassword(password, (user as any).passwordHash);
  if (!ok) return NextResponse.json({ error: 'invalid credentials' }, { status: 401 });

  const token = signToken({ id: user._id, username: user.username });
  return NextResponse.json({ ok: true, token });
}
