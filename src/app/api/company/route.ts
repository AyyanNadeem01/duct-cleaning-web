import { NextRequest, NextResponse } from 'next/server';
import mongoose from '@/lib/mongoose';
import Company from '@/models/Company';

async function connectDB() {
  if (mongoose.connections[0].readyState === 1) {
    return;
  }
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not set');
  }
  await mongoose.connect(MONGODB_URI);
}

export async function GET() {
  try {
    await connectDB();

    const company = await Company.findOne();

    if (!company) {
      return NextResponse.json(
        { error: 'Company information not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: company,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching company:', error);
    return NextResponse.json(
      { error: 'Failed to fetch company information' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const body = await req.json();

    let company = await Company.findOne();

    if (company) {
      // Update existing
      Object.assign(company, body);
      await company.save();
    } else {
      // Create new
      company = await Company.create(body);
    }

    return NextResponse.json(
      {
        success: true,
        data: company,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating company:', error);
    return NextResponse.json(
      { error: 'Failed to update company information' },
      { status: 500 }
    );
  }
}
