export function generateContactReference() {
  const now = new Date();

  const year = now
    .getFullYear()
    .toString();

  const month = String(
    now.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    now.getDate()
  ).padStart(2, "0");

  const random = Math.random()
    .toString(36)
    .slice(2, 8)
    .toUpperCase();

  return `DAAK-${year}${month}${day}-${random}`;
}