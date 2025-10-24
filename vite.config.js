import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
  return {
    base: "./",
    server: {
      open: true, // Automatically open the browser
      port: 3000, // Match CRA's default port (optional)
    },
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.js$/,
      exclude: [],
    },
    envPrefix: "REACT_",
    define: {
      'process.env': {
        "REACT_APP_INSTANCE_ID": "-1",
        "REACT_APP_TRIRIGA_URL": "http://localhost:9080",
        "REACT_APP_TRIRIGA_DEPLOY_URL": "http://localhost:9080",
        "REACT_APP_CONTEXT_PATH": "/",
        "REACT_APP_MODEL_AND_VIEW": "myTririgaApp",
        "REACT_APP_EXPOSED_NAME": "myTririgaApp",
        "REACT_APP_TRIRIGA_OAUTH_PROFILE_NAME": "",
        "REACT_APP_SSO": "false",
        "TRIRIGA_USER": "system",
        "TRIRIGA_PASSWORD": "badadmin",
        "BROWSER": "none"
      },
    },
    build: {
      outDir: 'build',
    },
    resolve: {
      alias: [
        {
          // this is required for the SCSS modules
          find: /^~(.*)$/,
          replacement: '$1',
        },
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'legacy', // Retain legacy API if required by your setup
          additionalData: `@use "@carbon/react/scss/themes" as *;`
        },
      },
    },

    optimizeDeps: {
      include: ['@carbon/icons-react', '@carbon/react', '@carbon/themes'],
      exclude: ['@tririga/react-components'], // Exclude Tririga components
      esbuildOptions: {
        loader: { '.js': 'jsx' }
      },
    },
    plugins: [react(), svgr()],
  };
});
