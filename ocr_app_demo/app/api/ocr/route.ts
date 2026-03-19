export async function POST(request: Request) {
  // giả lập xử lý OCR
  await new Promise((r) => setTimeout(r, 1000));

  return Response.json({
    status: "OK",
    detected_value: "0.28",
    file_name: "demo.pdf"
  });
}