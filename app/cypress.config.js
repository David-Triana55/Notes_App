import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    video: false, // Deshabilitar grabación de videos
    screenshotOnRunFailure: false // Deshabilitar capturas de pantalla en caso de fallos
  }
})
