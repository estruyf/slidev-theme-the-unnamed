/* ./setup/shiki.ts */
import { defineShikiSetup } from "@slidev/types";
import fs from "fs";
import path from "path";

export default defineShikiSetup(() => {
  const filePath = path.resolve(
    __dirname,
    `../public/theme/theunnamed-dark-theme.json`
  );
  const contents = fs.readFileSync(filePath, "utf-8");
  const theme = JSON.parse(contents);
  return {
    theme,
  };
});
