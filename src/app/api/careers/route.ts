import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import Career from '@/models/Career';
import { verifyToken } from '@/lib/auth';

export async function GET() {
  await connect();
  const items = await Career.find({}).sort({ createdAt: -1 }).lean();
  return NextResponse.json({ ok: true, data: items });
}

export async function POST(req: Request) {
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const body = await req.json();
  const doc = await Career.create(body);
  return NextResponse.json({ ok: true, data: doc });
}
