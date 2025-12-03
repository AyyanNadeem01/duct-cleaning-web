import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import ContactSubmission from '@/models/ContactSubmission';
import { verifyToken } from '@/lib/auth';

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  await ContactSubmission.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
