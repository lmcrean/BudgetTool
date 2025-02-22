import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GetApiMessage from '../../GetApiMessage';

vi.mock('axios');

describe('GetApiMessage Component - After Request', () => {
    it('displays loading state while fetching', async () => {
        const mockResponse = { data: 'Api is working!' };
        (axios.get as any).mockImplementation(() => new Promise(resolve => setTimeout(() => resolve(mockResponse), 100)));

        render(<GetApiMessage />);
        const button = screen.getByTestId('api-message-button');
        fireEvent.click(button);

        expect(button.textContent).toBe('Loading...');
        expect(button).toBeDisabled();

        await waitFor(() => {
            expect(button.textContent).toBe('Get API Message');
            expect(button).not.toBeDisabled();
        });
    });

    it('displays success message after successful request', async () => {
        const mockResponse = { data: 'Api is working!' };
        (axios.get as any).mockResolvedValueOnce(mockResponse);

        render(<GetApiMessage />);
        const button = screen.getByTestId('api-message-button');
        fireEvent.click(button);

        await waitFor(() => {
            const message = screen.getByTestId('api-message-display');
            expect(message).toBeDefined();
            expect(message.textContent).toBe('Api is working!');
        });
    });

    it('clears previous error when making new request', async () => {
        // First request fails
        (axios.get as any).mockRejectedValueOnce(new Error('Network error'));
        
        render(<GetApiMessage />);
        const button = screen.getByTestId('api-message-button');
        fireEvent.click(button);
        
        await waitFor(() => {
            expect(screen.getByTestId('api-message-error')).toBeDefined();
        });

        // Second request succeeds
        (axios.get as any).mockResolvedValueOnce({ data: 'Api is working!' });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.queryByTestId('api-message-error')).toBeNull();
            expect(screen.getByTestId('api-message-display')).toBeDefined();
        });
    });
}); 