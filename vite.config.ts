import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => ({
    base: './',
    server: {
        open: true,
        host: '127.0.0.1',
        port: 3000,
    },
    resolve: {
        alias: [
            {
                find: /^@\/(.*)/,
                replacement: `${resolve(__dirname, 'src')}/$1`,
            },
        ]
    },
}));