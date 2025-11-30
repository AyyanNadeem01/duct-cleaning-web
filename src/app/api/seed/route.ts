import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import fs from 'fs';
import path from 'path';
import About from '@/models/About';
import Service from '@/models/Service';
import CoverageArea from '@/models/CoverageArea';
import Promotion from '@/models/Promotion';
import Career from '@/models/Career';
import { verifyToken } from '@/lib/auth';

export async function POST(req: Request) {
  await connect();
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const dataPath = path.join(process.cwd(), 'data', 'seed.json');
  if (!fs.existsSync(dataPath)) return NextResponse.json({ error: 'seed file not found' }, { status: 400 });
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const json = JSON.parse(raw);

  if (json.about) await About.findOneAndUpdate({}, json.about, { upsert: true });
  if (Array.isArray(json.services)) {
    for (const s of json.services) {
      await Service.updateOne({ slug: s.slug }, { $set: s }, { upsert: true });
    }
  }
  if (Array.isArray(json.coverage)) {
    for (const c of json.coverage) await CoverageArea.updateOne({ areaName: c.areaName }, { $set: c }, { upsert: true });
  }
  if (Array.isArray(json.promotions)) {
    for (const p of json.promotions) await Promotion.updateOne({ title: p.title }, { $set: p }, { upsert: true });
  }
  if (Array.isArray(json.careers)) {
    for (const c of json.careers) await Career.updateOne({ title: c.title }, { $set: c }, { upsert: true });
  }

  return NextResponse.json({ ok: true });
}
