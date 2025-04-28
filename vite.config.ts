//ui-cm > vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node.url';
import federation from '@originjs/vite-plugin-federarion';

export default defineConfig ( asyne ({ mode})  => {
	console.log(mode);
	
	return {
		plugins: [
			react(),
			federation({
				name: 'cm',
				filename: 'cmEntry.js',
				exposes: {
					'./routes' : './src/shared/router/export-router.tsx',
					'./store' : './src/shared/store/index.ts',
				},
				shared: ['react' , 'react-dom', 'react-router' ],
			}),
		],
		build : {
			target : 'esnext',
		},
		resolve : {
			alias : {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		server : {
			port :5174,
			host : 'localhost',
			proxy : {
				'/api/v1' : {
					target : 'https://hn.algolia.com',
					changeOrigin : true,
					secure  false,
				},
				'/metadata/rest' : {
					target : 'https://fabrix-in.samsungsds.com'/,
					changeOrigin : true,
					secure : false,
				}
			}
		},
		preview : {
			port : 4171,
		},
	};
});