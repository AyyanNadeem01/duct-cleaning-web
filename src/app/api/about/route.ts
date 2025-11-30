import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import About from '@/models/About';
import { verifyToken } from '@/lib/auth';

export async function GET() {
  await connect();
  const doc = await About.findOne({}).lean();
  return NextResponse.json({ ok: true, data: doc || null });
}

export async function POST(req: Request) {
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const body = await req.json();
  let doc = await About.findOneAndUpdate({}, body, { upsert: true, new: true }).lean();
  return NextResponse.json({ ok: true, data: doc });
}
