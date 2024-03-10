/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import fs from 'fs'
import path from 'path'

export default defineShikiSetup(() => {
  const prefix = process.env.NODE_ENV === "development" ? ".." : "slidev-theme-the-unnamed";
  const theme = JSON.parse(fs.readFileSync(path.resolve(__dirname, `${prefix}/public/theme/theunnamed-dark-theme.json`)));
  return {
    theme
  }
})
