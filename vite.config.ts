import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import SvgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    SvgLoader({
      svgoConfig: {
        plugins: [
          "removeXMLNS",
          {
            name: "removeAttrs",
            params: {
              attrs: "fill",
            },
          },
          {
            name: "addAttributesToSVGElement",
            params: {
              attribute: {
                fill: "#AAADB3",
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: `assets/main.[hash].js`,
        chunkFileNames: `assets/[hash].js`,
        assetFileNames: `assets/[hash].[ext]`,
      },
    },
  },
});
