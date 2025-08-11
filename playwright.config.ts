// playwright.config.ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./playwright/tests",
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: "http://localhost:8080",
    trace: "on-first-retry",
    headless: true,
    launchOptions: {
      args: ["--start-fullscreen"],
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
