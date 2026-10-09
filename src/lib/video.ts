export type VideoSource =
  | { kind: "embed"; src: string; provider: "YouTube" | "Vimeo" }
  | { kind: "file"; src: string };

export function parseVideo(url?: string): VideoSource | null {
  if (!url) return null;
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  if (yt) return { kind: "embed", provider: "YouTube", src: `https://www.youtube-nocookie.com/embed/${yt[1]}` };
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return { kind: "embed", provider: "Vimeo", src: `https://player.vimeo.com/video/${vm[1]}` };
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url) || url.startsWith("/")) return { kind: "file", src: url };
  return null;
}
