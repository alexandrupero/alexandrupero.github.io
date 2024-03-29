import { defineConfig } from 'vite'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    stylelint({
      fix: true,
      build: true,
    }),
  ],
})
