const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7ye64e",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
  },
});
