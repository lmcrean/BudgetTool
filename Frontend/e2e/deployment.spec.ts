import { test, expect } from '@playwright/test';

// Skip deployment tests in local development
test.describe.skip('Deployment Tests', () => {
    test('should verify the frontend is deployed and accessible', async ({ page }) => {
        // Navigate to the frontend application
        await page.goto('https://budget-tool-frontend-dubuhsc9aeezgj0.uksouth.1.azurewebsites.net');
        
        // Verify the page loads
        await expect(page).toHaveTitle(/Budget Tool/);
        
        // Take a screenshot of the deployed frontend
        await page.screenshot({ path: 'e2e/screenshots/deployment-frontend.png' });
        
        // Verify key UI elements are present
        await expect(page.locator('nav')).toBeVisible();
        await expect(page.locator('footer')).toBeVisible();
    });

    test('should verify the backend API is deployed and accessible', async ({ request }) => {
        // Test the backend health endpoint
        const healthResponse = await request.get('https://budget-tool-backend-fkfbg9bjbncvd5hb.uksouth.1.azurewebsites.net/health');
        expect(healthResponse.ok()).toBeTruthy();
        
        // Test the backend API version endpoint if available
        const versionResponse = await request.get('https://budget-tool-backend-fkfbg9bjbncvd5hb.uksouth.1.azurewebsites.net/version');
        expect(versionResponse.ok()).toBeTruthy();
    });
}); 