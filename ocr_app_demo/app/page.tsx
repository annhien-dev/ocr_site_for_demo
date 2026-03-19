'use client';

import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<any>(null);

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const res = await fetch('/api/ocr', {
      method: 'POST',
      body: file
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>OCR Demo</h1>

      <input id="upload" type="file" onChange={handleUpload} />

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}