import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // You can add setupNodeEvents if needed, but keep ES module syntax
    baseUrl: "http://localhost:8080/",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.{js,ts}",
  },
});
