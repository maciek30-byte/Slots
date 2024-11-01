import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { resolve } from 'path';

export default defineConfig({
    plugins: [basicSsl()],
    root: 'src',
    publicDir: 'assets',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html')
            },
            output: {
                entryFileNames: 'js/[name].js'
            }
        }
    },
    server: {
        port: 3000,
        open: true,
        cors: true
    }
});