/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async ({ loadTheme }) => {
  const prefix = process.env.NODE_ENV === "development" ? "../" : "slidev-theme-the-unnamed";
  return {
    theme: {
      dark: await loadTheme(require.resolve(`${prefix}/public/theme/theunnamed-dark-theme.json`)),
      light: await loadTheme(require.resolve(`${prefix}/public/theme/theunnamed-dark-theme.json`))
    },
  }
})
