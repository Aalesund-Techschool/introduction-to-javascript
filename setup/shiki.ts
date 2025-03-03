/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'material-theme-darker',
      light: 'light-plus',
    },
    transformers: [
      // ...
    ],
  }
})
