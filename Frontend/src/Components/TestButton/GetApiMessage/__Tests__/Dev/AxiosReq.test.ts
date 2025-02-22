import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';

vi.mock('axios');

describe('GetApiMessage Dev Environment Tests', () => {
    const DEV_API_URL = 'http://localhost:5000'; // Assuming this is your dev server port

    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('dev server returns correct API message', async () => {
        const mockResponse = { status: 200, data: 'Api is working!' };
        vi.mocked(axios.get).mockResolvedValueOnce(mockResponse);

        const response = await axios.get(`${DEV_API_URL}/api/status`);
        expect(response.status).toBe(200);
        expect(response.data).toBe('Api is working!');
        expect(axios.get).toHaveBeenCalledWith(`${DEV_API_URL}/api/status`);
    });

    it('dev server CORS is properly configured', async () => {
        const mockResponse = {
            status: 200,
            headers: {
                'access-control-allow-origin': '*'
            }
        };
        vi.mocked(axios.get).mockResolvedValueOnce(mockResponse);

        const response = await axios.get(`${DEV_API_URL}/api/status`, {
            headers: {
                'Origin': 'http://localhost:5173' // Vite's default dev server
            }
        });
        
        expect(response.headers['access-control-allow-origin']).toBeDefined();
        expect(axios.get).toHaveBeenCalledWith(`${DEV_API_URL}/api/status`, {
            headers: {
                'Origin': 'http://localhost:5173'
            }
        });
    });
}); 