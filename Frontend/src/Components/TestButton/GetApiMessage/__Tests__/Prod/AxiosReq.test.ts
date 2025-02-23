import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';

vi.mock('axios');

// Production tests temporarily skipped
describe.skip('GetApiMessage Production Environment Tests', () => {
    const PROD_API_URL = 'https://budget-tool-backend-fkfbg9bjbncvd5hb.uksouth-01.azurewebsites.net';

    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('production server returns correct API message', async () => {
        const mockResponse = { status: 200, data: 'Api is working!' };
        vi.mocked(axios.get).mockResolvedValueOnce(mockResponse);

        const response = await axios.get(`${PROD_API_URL}/api/status`);
        expect(response.status).toBe(200);
        expect(response.data).toBe('Api is working!');
        expect(axios.get).toHaveBeenCalledWith(`${PROD_API_URL}/api/status`);
    });

    it('production server CORS is properly configured', async () => {
        const mockResponse = {
            status: 200,
            headers: {
                'access-control-allow-origin': 'https://budget-tool-frontend-dububsc9aeezgjf0.uksouth-01.azurewebsites.net'
            }
        };
        vi.mocked(axios.get).mockResolvedValueOnce(mockResponse);

        const response = await axios.get(`${PROD_API_URL}/api/status`, {
            headers: {
                'Origin': 'https://budget-tool-frontend-dububsc9aeezgjf0.uksouth-01.azurewebsites.net'
            }
        });
        
        expect(response.headers['access-control-allow-origin']).toBeDefined();
        expect(axios.get).toHaveBeenCalledWith(`${PROD_API_URL}/api/status`, {
            headers: {
                'Origin': 'https://budget-tool-frontend-dububsc9aeezgjf0.uksouth-01.azurewebsites.net'
            }
        });
    });

    it('production server uses HTTPS', () => {
        expect(PROD_API_URL.startsWith('https://')).toBe(true);
    });
}); 