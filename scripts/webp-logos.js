/*
・ロゴ・エンブレム（ラスター）
・形式：WebP
・quality：90
・透過：保持
・SVG化は将来対応
*/

import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputRoot = "public/images/original/emblem";
const outputRoot = "public/images/emblem";

function convertDir(inputDir, outputDir) {
  fs.mkdirSync(outputDir, { recursive: true });

  for (const item of fs.readdirSync(inputDir, { withFileTypes: true })) {
    const inputPath = path.join(inputDir, item.name);
    const outputPath = path.join(
      outputDir,
      item.name.replace(/\.(png|jpg|jpeg)$/i, ".webp")
    );

    if (item.isDirectory()) {
      convertDir(inputPath, path.join(outputDir, item.name));
    } else if (item.isFile()) {
      sharp(inputPath)
        .webp({ quality: 90 })
        .toFile(outputPath);

      console.log("logo:", inputPath);
    }
  }
}

convertDir(inputRoot, outputRoot);
