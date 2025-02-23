import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./src/setupTests.ts'],
        exclude: [
            '**/node_modules/**',
            '**/e2e/**',
            '**/tests/**',
            '**/tests-examples/**',
            '**/*.spec.ts',
            '**/*.spec.tsx'
        ]
    },
}); 