const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      offerNumber: 13,
      codeNumber: 13
    },

    baseUrl: "https://cmpp.seal.sk/login/sk/?non-sso",
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
  },
});
