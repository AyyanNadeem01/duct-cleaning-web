import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongoose';
import ContactSubmission from '@/models/ContactSubmission';
import nodemailer from 'nodemailer';

function getTransporter() {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 587);
  const secure = (process.env.EMAIL_SECURE === 'true');
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!host || !user || !pass) {
    console.warn('Email not configured. Set EMAIL_HOST, EMAIL_USER and EMAIL_PASS in env');
    return null;
  }

  return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

export async function POST(req: Request) {
  await connect();
  const body = await req.json();
  const { name, email, phone, message } = body || {};
  const doc = await ContactSubmission.create({ name, email, phone, message });

  const transporter = getTransporter();
  if (transporter) {
    const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
    const mail = {
      from: process.env.EMAIL_USER,
      to,
      subject: `Contact form submission from ${name || 'visitor'}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong><br/>${message}</p>`
    };
    try {
      await transporter.sendMail(mail);
    } catch (err) {
      console.error('error sending contact email', err);
    }
  }

  return NextResponse.json({ ok: true, data: doc });
}
