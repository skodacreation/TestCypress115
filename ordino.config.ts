import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from "@mmisty/cypress-allure-adapter/plugins";
import cypressSplit from "cypress-split";
require("dotenv").config();

export default defineConfig({
  e2e: {
    specPattern: "ordino/e2e/**/*.cy.ts",
    supportFile: "ordino/support/e2e.ts",
    fixturesFolder: "ordino/fixtures",
    screenshotsFolder: "ordino-report/screenshots",

    // ===== test project settings start ==== //
    baseUrl: "https://demoapp.ordino.ai/login",

    // ===== dashboard settings start ==== //
    env: {
      allure: true,
      allureCleanResults: true,
      allureSkipCommands: "wrap,screenshot,wait",
      allureResults: "ordino-report",
      allureAttachRequests: true,
      grepOmitFiltered: true,
      grepFilterSpecs: true,
    },

    // ===== dev reporter context start ==== //
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "ordino-report/report",
      reportFilename: "[status]_[datetime]_[name]",
      timestamp: "yyyy-mm-dd-HH-MM",
      overwrite: false,
      html: false,
      json: true,
    },

    setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(config);
      const reporter = configureAllureAdapterPlugins(on, config);

      // ===== dashboard context start ==== //
      on("before:run", (details) => {
        reporter?.writeEnvironmentInfo({
          info: {
            os: details.system.osName,
            osVersion: details.system.osVersion,
            browser:
              details.browser?.displayName + " " + details.browser?.version,
            ...config.env,
          },
        });
        reporter?.writeCategoriesDefinitions({
          categories: "./allure-error-categories.json",
        });
      });
      // ===== dashboard context end ===== //

      cypressSplit(on, config);
      return config;
    },
  },
});