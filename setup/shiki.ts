/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(require.resolve(`slidev-theme-the-unnamed/public/theme/theunnamed-dark-theme.json`)),
      light: await loadTheme(require.resolve(`slidev-theme-the-unnamed/public/theme/theunnamed-dark-theme.json`))
    },
  }
})
