/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(`../../public/theme/theunnamed-dark-theme.json`),
      light: await loadTheme(`../../public/theme/theunnamed-dark-theme.json`)
    },
  }
})