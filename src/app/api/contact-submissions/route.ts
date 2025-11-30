import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import ContactSubmission from '@/models/ContactSubmission';
import { verifyToken } from '@/lib/auth';

export async function GET(req: Request) {
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const submissions = await ContactSubmission.find({}).sort({ createdAt: -1 }).lean();
  return NextResponse.json({ ok: true, data: submissions });
}

export async function DELETE(req: Request) {
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const id = new URL(req.url).pathname.split('/').pop();
  await ContactSubmission.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
