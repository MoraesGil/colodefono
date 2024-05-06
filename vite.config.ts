import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
	plugins: [
		react(),
		copy({
			targets: [
				{ src: 'src/assets/*', dest: 'dist/assets' },
				{ src: 'src/assets/certificates/*', dest: 'dist/assets/certificates' },
				{ src: 'dist/index.html', dest: 'dist', rename: '404.html' },
				{ src: 'dist/index.html', dest: 'dist', rename: '200.html' },
			],
			hook: 'writeBundle',
		}),
	],
	publicDir: 'src',
	base: process.env.NODE_ENV === 'production' ? '/' : '/',
});
