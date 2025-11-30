import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import AdminUser from '@/models/AdminUser';
import { hashPassword, signToken } from '@/lib/auth';

export async function POST(req: Request) {
  await connect();
  const body = await req.json();
  const { username, password } = body;
  if (!username || !password) return NextResponse.json({ error: 'username and password required' }, { status: 400 });

  const existing = await AdminUser.findOne({ username }).lean();
  if (existing) return NextResponse.json({ error: 'user exists' }, { status: 400 });

  const passwordHash = await hashPassword(password);
  const doc = await AdminUser.create({ username, passwordHash });
  const token = signToken({ id: doc._id, username: doc.username });
  return NextResponse.json({ ok: true, token });
}
