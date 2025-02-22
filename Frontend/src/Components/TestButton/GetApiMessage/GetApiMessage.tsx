import React, { useState } from 'react';
import axios from 'axios';

const GetApiMessage: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchApiMessage = async () => {
        setIsLoading(true);
        setError('');
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/status`);
            setMessage(response.data);
        } catch (err) {
            setError('Failed to fetch API message');
            console.error('Error fetching API message:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="api-message-container">
            <button 
                onClick={fetchApiMessage}
                disabled={isLoading}
                data-testid="api-message-button"
                className="api-message-button"
            >
                {isLoading ? 'Loading...' : 'Get API Message'}
            </button>
            
            {message && (
                <div data-testid="api-message-display" className="api-message">
                    {message}
                </div>
            )}
            
            {error && (
                <div data-testid="api-message-error" className="api-message-error">
                    {error}
                </div>
            )}
        </div>
    );
};

export default GetApiMessage; 