"use client";
import { useState } from 'react';

export default function OCRPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    const response = await fetch('/api/ocr');
    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-5">Hệ thống OCR Giả lập</h1>
      <button id="scan-btn" onClick={handleScan} className="bg-blue-500 text-white px-6 py-2 rounded">
        {loading ? "Đang quét..." : "Bắt đầu Quét"}
      </button>
      {result && (
        <div className="mt-10 p-5 border rounded bg-gray-50 w-80">
          <p id="status-display">Trạng thái: <strong>{result.status}</strong></p>
          <p id="value-display">Giá trị: <strong>{result.detected_value}</strong></p>
        </div>
      )}
    </div>
  );
}