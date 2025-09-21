import uncss from "uncss";
import { glob } from "glob";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const distDir = ".vitepress/dist";
const htmlFiles = glob.sync(join(distDir, "**/*.html"));
const cssFiles = glob.sync(join(distDir, "assets/*.css"));

cssFiles.forEach((cssFile) => {
  uncss(
    htmlFiles,
    {
      stylesheets: [cssFile],
      ignore: [
        /\.vp-/,
        /\.VP/,
        /\.theme/,
        /hover/,
        /focus/,
        /active/,
        /\.language-/,
        /\.token/,
      ],
    },
    (error, output) => {
      if (!error) {
        writeFileSync(cssFile, output);
        console.log(`Optimized: ${cssFile}`);
      }
    }
  );
});
