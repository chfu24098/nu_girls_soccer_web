/*
Team（Hero / 集合写真）
・形式：WebP
・quality：75
・透過：不要
・リサイズ：しない（まずは）
・メタデータ：削除
*/

import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/images/original/team";
const outputDir = "public/images/team";

fs.mkdirSync(outputDir, { recursive: true });

for (const file of fs.readdirSync(inputDir)) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(
    outputDir,
    file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
  );

  sharp(inputPath)
    .webp({ quality: 75 })
    .toFile(outputPath);

  console.log("team:", file);
}
