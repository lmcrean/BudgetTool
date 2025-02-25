import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    baseURL: 'http://localhost:5000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'api-testing',
      testMatch: /.*\.spec\.ts/,
      testIgnore: /.*prod-api\.spec\.ts/,
    },
    {
      name: 'prod-api-testing',
      testMatch: /.*prod-api\.spec\.ts/,
      use: {
        // For production tests, we don't need a baseURL as we use the full URL in the tests
        baseURL: '',
      },
    },
  ],
}); 