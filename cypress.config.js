const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'https://10clouds.com/',
    pageLoadTimeout: 20000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
