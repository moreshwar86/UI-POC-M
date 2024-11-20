import { Document, Packer, Paragraph, TextRun } from "docx";

export class DocumentCreator {
  static create(content: any) {
    // Create paragraphs from the content
    const paragraphs = content.blocks.map((block: any) => {
      if (block.text.trim() === "") return new Paragraph(""); // Empty paragraph
      return new Paragraph({
        children: [
          new TextRun({
            text: block.text,
            bold: block.inlineStyleRanges.some(
              (style: any) => style.style === "BOLD"
            ),
            italics: block.inlineStyleRanges.some(
              (style: any) => style.style === "ITALIC"
            ),
            underline: block.inlineStyleRanges.some(
              (style: any) => style.style === "UNDERLINE"
            ),
          }),
        ],
      });
    });
    // Create the document
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs,
        },
      ],
    });

    return Packer.toBlob(doc); // Return the blob for export
  }
}
