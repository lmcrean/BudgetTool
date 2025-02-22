import { describe, it, expect } from 'vitest';
import axios from 'axios';

describe('GetApiMessage Dev Environment Tests', () => {
    const DEV_API_URL = 'http://localhost:5000'; // Assuming this is your dev server port

    it('dev server returns correct API message', async () => {
        try {
            const response = await axios.get(`${DEV_API_URL}/api/status`);
            expect(response.status).toBe(200);
            expect(response.data).toBe('Api is working!');
        } catch (error) {
            throw new Error('Dev server must be running for this test');
        }
    });

    it('dev server CORS is properly configured', async () => {
        try {
            const response = await axios.get(`${DEV_API_URL}/api/status`, {
                headers: {
                    'Origin': 'http://localhost:5173' // Vite's default dev server
                }
            });
            expect(response.headers['access-control-allow-origin']).toBeDefined();
        } catch (error) {
            throw new Error('Dev server must be running and CORS must be configured');
        }
    });
}); 