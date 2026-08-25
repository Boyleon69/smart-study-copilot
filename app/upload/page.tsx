"use client";

import { useState } from "react";
import { extractTextFromPdf } from "@/lib/pdf";

export default function UploadPage() {
  const [fileName, setFileName] = useState("");
  const [text, setText] = useState("");

  async function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    try {
  const extractedText =
    await extractTextFromPdf(file);

  setText(extractedText);
} catch (error) {
  console.error("PDF Extraction Error:", error);

  setText(
    "PDF extraction failed. Check browser console."
  );
}
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Upload Study Material
      </h1>

      <div className="bg-slate-800 p-8 rounded-lg">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
        />

        {fileName && (
          <p className="mt-4">
            File: {fileName}
          </p>
        )}
      </div>

      {text && (
        <div className="mt-8 bg-slate-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Extracted Text
          </h2>

          <pre className="whitespace-pre-wrap">
            {text}
          </pre>
        </div>
      )}
    </main>
  );
}