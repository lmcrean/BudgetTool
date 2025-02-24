import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('status endpoint returns successfully', async ({ request }) => {
    // Make a request to the status endpoint
    const response = await request.get('http://localhost:5000/api/status');
    
    // Verify the response status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    // Verify the response content
    const text = await response.text();
    expect(text).toBeTruthy();
  });
}); 