/* ./setup/shiki.ts */
import { defineShikiSetup } from "@slidev/types";
import fs from "fs";
import path from "path";

export default defineShikiSetup(() => {
  const prefix =
    process.env.NODE_ENV === "development" ? ".." : "slidev-theme-the-unnamed";
  const filePath = path.resolve(
    __dirname,
    `${prefix}/public/theme/theunnamed-dark-theme.json`
  );
  const contents = fs.readFileSync(filePath, "utf-8");
  const theme = JSON.parse(contents);
  return {
    theme,
  };
});
