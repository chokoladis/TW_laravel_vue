import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { wayfinder } from "@laravel/vite-plugin-wayfinder";

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 5173,
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true,
        },
    },
    plugins: [
        vue(),
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.ts'],
            refresh: true,
        }),
        wayfinder()
    ],
});
