import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'
import removeConsole from 'vite-plugin-remove-console'

const timestamp = Date.now()

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env?.VITE_FILE_PATH ? env.VITE_FILE_PATH : './',
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
        /**
         * custom insert position
         * @default: body-last
         */
        inject: 'body-last' | 'body-first',
        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__',
      }),
      removeConsole(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 3000,
      open: true,
      hmr: true,
      proxy: {
        '/VipAPI/': {
          target: env.VITE_API_ENDPOINT + '/VipAPI',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/VipAPI/, ''),
        },
      },
    },
    // build: {
    //   rollupOptions: {
    //     output: {
    //       entryFileNames: `assets/[name]-[hash]-${timestamp}.js`,
    //       chunkFileNames: `assets/[name]-[hash]-${timestamp}.js`,
    //       assetFileNames: `assets/[name]-[hash]-${timestamp}[extname]`,
    //     },
    //   },
    //   sourcemap: true,
    // },
  }
})
