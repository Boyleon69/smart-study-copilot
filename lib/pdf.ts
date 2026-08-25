import * as pdfjsLib from "pdfjs-dist";

export async function extractTextFromPdf(file: File) {
  const arrayBuffer = await file.arrayBuffer();

  const loadingTask = pdfjsLib.getDocument({
    data: arrayBuffer,
  });

  const pdf = await loadingTask.promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);

    const content = await page.getTextContent();

    const pageText = content.items
      .map((item: any) => item.str)
      .join(" ");

    text += pageText + "\n";
  }

  return text;
}