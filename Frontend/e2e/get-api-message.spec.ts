import { test, expect } from '@playwright/test';

test.describe('GetApiMessage Component', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the development server where the component is rendered
        await page.goto('/');
    });

    test('should display API message after clicking button', async ({ page }) => {
        // Arrange
        const button = page.getByTestId('api-message-button');
        
        // Assert initial state
        await expect(button).toBeVisible();
        await expect(button).toHaveText('Get API Message');
        await expect(button).toBeEnabled();

        // Act - Click the button
        await button.click();

        // Assert loading state
        await expect(button).toBeDisabled();
        await expect(button).toHaveText('Loading...');

        // Assert success state
        const messageDisplay = page.getByTestId('api-message-display');
        await expect(messageDisplay).toBeVisible();
        await expect(messageDisplay).toHaveText('Api is working!');

        // Assert button returns to ready state
        await expect(button).toBeEnabled();
        await expect(button).toHaveText('Get API Message');
    });

    test('should show error message when API request fails', async ({ page }) => {
        // Arrange - Navigate to page where API won't be available
        await page.goto('/');
        const button = page.getByTestId('api-message-button');
        
        // Act - Trigger the API call
        await button.click();

        // Assert error state
        const errorMessage = page.getByTestId('api-message-error');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Failed to fetch API message');
        
        // Assert button returns to ready state
        await expect(button).toBeEnabled();
        await expect(button).toHaveText('Get API Message');
    });
}); 