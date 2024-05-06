import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
	plugins: [
		react(),
		copy({
			targets: [
				{ src: 'src/404.html', dest: 'dist/' },
				{ src: 'src/200.html', dest: 'dist/' },
				{ src: 'src/assets/*', dest: 'dist/assets' },
				{
					src: 'src/assets/certificates/**',
					dest: 'dist/assets/certificates',
				},
			],
			hook: 'writeBundle',
		}),
	],
	publicDir: 'src',
	base: process.env.NODE_ENV === 'production' ? '/' : '/colodefono',
});
