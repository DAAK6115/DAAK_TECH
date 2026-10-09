import crypto from "crypto";
import fs from "fs/promises";
import path from "path";

const storageRoot = path.join(
  process.cwd(),
  ".data",
  "contact-attachments"
);

const allowedMimeTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
]);

const maxFileSize =
  10 * 1024 * 1024;

export async function savePrivateAttachment(
  file: File
) {
  if (file.size > maxFileSize) {
    throw new Error("FILE_TOO_LARGE");
  }

  if (
    !allowedMimeTypes.has(file.type)
  ) {
    throw new Error(
      "INVALID_FILE_TYPE"
    );
  }

  await fs.mkdir(storageRoot, {
    recursive: true,
  });

  const extension =
    path.extname(file.name)
      .toLowerCase()
      .slice(0, 10);

  const generatedName =
    `${crypto.randomUUID()}${extension}`;

  const absolutePath =
    path.join(
      storageRoot,
      generatedName
    );

  const bytes =
    Buffer.from(
      await file.arrayBuffer()
    );

  await fs.writeFile(
    absolutePath,
    bytes
  );

  return {
    originalName: file.name,
    storagePath: generatedName,
    mimeType: file.type,
    size: file.size,
  };
}