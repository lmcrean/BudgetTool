import { describe, it, expect } from 'vitest';
import axios from 'axios';

describe('GetApiMessage Production Environment Tests', () => {
    const PROD_API_URL = 'https://budget-tool-backend-fkfbg9bjbncvd5hb.uksouth-01.azurewebsites.net';

    it('production server returns correct API message', async () => {
        try {
            const response = await axios.get(`${PROD_API_URL}/api/status`);
            expect(response.status).toBe(200);
            expect(response.data).toBe('Api is working!');
        } catch (error) {
            throw new Error('Production server is not accessible or returning incorrect response');
        }
    });

    it('production server CORS is properly configured', async () => {
        try {
            const response = await axios.get(`${PROD_API_URL}/api/status`, {
                headers: {
                    'Origin': 'https://budget-tool-frontend-dububsc9aeezgjf0.uksouth-01.azurewebsites.net'
                }
            });
            expect(response.headers['access-control-allow-origin']).toBeDefined();
        } catch (error) {
            throw new Error('Production server CORS is not properly configured');
        }
    });

    it('production server uses HTTPS', () => {
        expect(PROD_API_URL.startsWith('https://')).toBe(true);
    });
}); 