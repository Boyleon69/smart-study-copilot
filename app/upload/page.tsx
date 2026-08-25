"use client";

import { useState } from "react";

export default function UploadPage() {
  const [fileName, setFileName] = useState("");

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Upload Study Material
      </h1>

      <div className="bg-slate-800 p-8 rounded-lg max-w-xl">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
              setFileName(file.name);
            }
          }}
        />

        {fileName && (
          <p className="mt-4">
            Selected File: {fileName}
          </p>
        )}
      </div>
    </main>
  );
}