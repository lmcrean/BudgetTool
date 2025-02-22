import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GetApiMessage from '../../GetApiMessage';

describe('GetApiMessage Component - Before Request', () => {
    it('renders the button with correct initial text', () => {
        render(<GetApiMessage />);
        const button = screen.getByTestId('api-message-button');
        expect(button).toBeDefined();
        expect(button.textContent).toBe('Get API Message');
    });

    it('button is enabled initially', () => {
        render(<GetApiMessage />);
        const button = screen.getByTestId('api-message-button');
        expect(button).not.toBeDisabled();
    });

    it('message is not displayed initially', () => {
        render(<GetApiMessage />);
        const message = screen.queryByTestId('api-message-display');
        expect(message).toBeNull();
    });

    it('error message is not displayed initially', () => {
        render(<GetApiMessage />);
        const error = screen.queryByTestId('api-message-error');
        expect(error).toBeNull();
    });
}); 