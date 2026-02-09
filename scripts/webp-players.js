
/*
選手写真（players）
・用途：一覧・カード
・形式：WebP
・quality：85
・透過：保持
・リサイズ：なし（元が適切前提）
・メタデータ：削除
*/

import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/images/original/member2";
const outputDir = "public/images/players";

fs.mkdirSync(outputDir, { recursive: true });

for (const file of fs.readdirSync(inputDir)) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(
    outputDir,
    file.replace(/\.(png|jpg|jpeg)$/i, ".webp")
  );

  sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(outputPath);

  console.log("converted:", file);
}
