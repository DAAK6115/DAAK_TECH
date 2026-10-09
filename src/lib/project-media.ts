import fs from "node:fs";
import path from "node:path";

/** Retourne le chemin de l'image si le fichier existe dans /public, sinon null. */
export function resolveProjectImage(src: string): string | null {
  if (!src) return null;
  if (!src.startsWith("/")) return src;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src)) ? src : null;
  } catch {
    return null;
  }
}
