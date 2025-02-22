import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GetApiMessage from '../../GetApiMessage';

vi.mock('axios');

describe('GetApiMessage Component - Axios Alignment', () => {
    it('makes request to correct endpoint', async () => {
        const mockResponse = { data: 'Api is working!' };
        (axios.get as any).mockResolvedValueOnce(mockResponse);

        render(<GetApiMessage />);
        const button = screen.getByTestId('api-message-button');
        fireEvent.click(button);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith(`${import.meta.env.VITE_API_URL}/api/status`);
        });
    });

    it('response format matches backend format', async () => {
        const mockResponse = { data: 'Api is working!' };
        (axios.get as any).mockResolvedValueOnce(mockResponse);

        render(<GetApiMessage />);
        const button = screen.getByTestId('api-message-button');
        fireEvent.click(button);

        await waitFor(() => {
            const message = screen.getByTestId('api-message-display');
            expect(message.textContent).toBe('Api is working!');
        });
    });

    it('handles error response correctly', async () => {
        (axios.get as any).mockRejectedValueOnce(new Error('Network error'));

        render(<GetApiMessage />);
        const button = screen.getByTestId('api-message-button');
        fireEvent.click(button);

        await waitFor(() => {
            const error = screen.getByTestId('api-message-error');
            expect(error.textContent).toBe('Failed to fetch API message');
        });
    });
}); 