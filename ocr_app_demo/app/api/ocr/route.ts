import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: "OK",
    detected_value: "0.28",
    reason: "Dữ liệu thật từ máy chủ"
  });
}