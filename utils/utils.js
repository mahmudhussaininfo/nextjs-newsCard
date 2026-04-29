import fs from "fs";
import path from "path";

export async function getNews() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const fileContents = await fs.promises.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

// number convert
export function formatToKIntl(number) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(number);
}

// date convert
export function formatDate(date) {
  return Math.floor((Date.now() - new Date(date)) / (1000 * 60 * 60 * 24));
}
