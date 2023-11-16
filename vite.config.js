import path from 'path';
import { defineConfig } from 'vite';

function isExternal(id) {
	return !id.startsWith('.') && !path.isAbsolute(id) && !id.startsWith('~/');
}

export default defineConfig(() => ({
	base: './',
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
			'~components': path.resolve(__dirname, './src/js/components'),
		},
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
		rollupOptions: {
			external: isExternal,
		},
	},
}));
