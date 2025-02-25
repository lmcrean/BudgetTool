import { test, expect } from '@playwright/test';

// Production API URL from Azure
const PROD_API_URL = 'https://budget-tool-backend-fkfbg9bjbncvd5hb.uksouth-01.azurewebsites.net';

test.describe('Production API Tests', () => {
  test('production status endpoint returns successfully with correct message', async ({ request }) => {
    // Make a request to the production status endpoint
    const response = await request.get(`${PROD_API_URL}/api/status`);
    
    // Verify the response status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    // Verify the response content
    const text = await response.text();
    expect(text).toBeTruthy();
    
    // Verify the exact message content
    expect(text).toBe('Api is working!');
    
    // Log the response for debugging
    console.log('Production status endpoint response:', text);
  });
}); 