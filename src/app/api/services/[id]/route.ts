import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import Service from '@/models/Service';
import { verifyToken } from '@/lib/auth';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connect();
  const id = params.id;
  const doc = await Service.findById(id).lean();
  if (!doc) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json({ ok: true, data: doc });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const id = params.id;
  const body = await req.json();
  const doc = await Service.findByIdAndUpdate(id, body, { new: true }).lean();
  if (!doc) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json({ ok: true, data: doc });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const id = params.id;
  await Service.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
