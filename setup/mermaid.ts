import type { MermaidOptions } from '@slidev/types'
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  // eslint-disable-next-line prefer-const
  let injection_return: MermaidOptions = {
    theme: 'forest',
    themeVariables: {
      // General theme variables
      noteBkgColor: "#181d29",
      noteTextColor: "#F3EFF5cc",
      noteBorderColor: "#404551",

      // Sequence diagram variables
      actorBkg: "#0E131F",
      actorBorder: "#44FFD2",
      actorTextColor: "#F3EFF5",
      actorLineColor: "#F3EFF5",
      signalColor: "#F3EFF5",
      signalTextColor: "#F3EFF5",
      sequenceNumberColor: "#F3EFF5",
      labelBoxBorderColor: "#5EADF2",
      activationBkgColor: "#181d29",
      activationBorderColor: "#5EADF2",
    },
    themeCSS: `
      polygon.labelBox,
      polygon.labelBox + text {
        display: none;
      }
    `
  }

  return injection_return
})