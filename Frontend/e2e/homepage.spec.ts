import { test, expect } from '@playwright/test';

test('homepage should load', async ({ page }) => {
  await page.goto('/');
  
  // Check if the page has loaded
  await expect(page).toHaveTitle(/Vite \+ React/);
  
  // Verify the React logo is visible
  await expect(page.getByAltText('React logo')).toBeVisible();
  
  // Take a screenshot of the entire page
  await page.screenshot({ 
    path: './e2e/screenshots/homepage.png',
    fullPage: true 
  });
}); 