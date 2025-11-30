import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import CoverageArea from '@/models/CoverageArea';
import { verifyToken } from '@/lib/auth';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connect();
  const doc = await CoverageArea.findById(params.id).lean();
  if (!doc) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json({ ok: true, data: doc });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const body = await req.json();
  const doc = await CoverageArea.findByIdAndUpdate(params.id, body, { new: true }).lean();
  if (!doc) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json({ ok: true, data: doc });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  await CoverageArea.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}
