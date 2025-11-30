import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import ContactSubmission from '@/models/ContactSubmission';
import { verifyToken } from '@/lib/auth';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  await ContactSubmission.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}
