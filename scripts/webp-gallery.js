/*
GALLERY写真
・用途：試合・活動写真
・形式：WebP
・quality：75
・透過：不要
・リサイズ：なし（将来やってもいい）
・メタデータ：削除
*/

import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/images/original/gallery";
const outputDir = "public/images/gallery";

fs.mkdirSync(outputDir, { recursive: true });

for (const file of fs.readdirSync(inputDir)) {
  sharp(path.join(inputDir, file))
    .webp({ quality: 75 })
    .toFile(
      path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, ".webp"))
    );
}
