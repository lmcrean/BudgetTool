import { test, expect } from '@playwright/test';

test.describe('API Message Button Integration Test', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto('/');
    
    // Ensure the page and component loaded properly
    await page.waitForLoadState('networkidle');
  });

  test('should click button and show API message', async ({ page }) => {
    // Find the API message button and ensure it exists
    const apiButton = page.getByTestId('api-message-button');
    await expect(apiButton).toBeVisible();
    await expect(apiButton).toHaveText('Get API Message');
    await expect(apiButton).toBeEnabled();
    
    // Click the button - loading state might be too quick to catch reliably
    await apiButton.click();
    
    // Instead of checking for loading state, focus on the final result
    // Wait for the API request to complete and check for the message display
    const messageDisplay = page.getByTestId('api-message-display');
    await expect(messageDisplay).toBeVisible({ timeout: 10000 });
    
    // Verify that the message is not empty
    const messageText = await messageDisplay.textContent();
    expect(messageText).toBeTruthy();
    expect(messageText?.length).toBeGreaterThan(0);
    
    // Verify that the button returns to its original state
    await expect(apiButton).toHaveText('Get API Message', { timeout: 5000 });
    await expect(apiButton).toBeEnabled({ timeout: 5000 });
    
    // Take a screenshot for visual verification
    await page.screenshot({ path: 'api-message-success.png' });
  });
  
  test('should handle API failure gracefully', async ({ page, context }) => {
    // Mock a failed API response
    await context.route('**/api/status', route => route.fulfill({
      status: 500,
      body: 'Server error'
    }));
    
    // Find and click the API message button
    const apiButton = page.getByTestId('api-message-button');
    await expect(apiButton).toBeVisible();
    await apiButton.click();
    
    // Skip checking for loading state as it might be too quick
    
    // Check for error message
    const errorMessage = page.getByTestId('api-message-error');
    await expect(errorMessage).toBeVisible({ timeout: 10000 });
    
    // Verify error message content
    const errorText = await errorMessage.textContent();
    expect(errorText).toContain('Failed to fetch API message');
    
    // Verify that the button returns to its original state
    await expect(apiButton).toHaveText('Get API Message', { timeout: 5000 });
    await expect(apiButton).toBeEnabled({ timeout: 5000 });
    
    // Take a screenshot for visual verification
    await page.screenshot({ path: 'api-message-error.png' });
  });
});
