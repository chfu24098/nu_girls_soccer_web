/*
NEWS記事画像
・用途：文字入り・OGP以外
・形式：WebP
・quality：85
・メタデータ：削除
*/


import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/images/original/news";
const outputDir = "public/images/news";

fs.mkdirSync(outputDir, { recursive: true });

for (const file of fs.readdirSync(inputDir)) {
  sharp(path.join(inputDir, file))
    .webp({ quality: 85 })
    .toFile(
      path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, ".webp"))
    );
}
