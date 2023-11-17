import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
	base: './',
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
			'~components': path.resolve(__dirname, './src/js/components'),
		},
	},
}));
