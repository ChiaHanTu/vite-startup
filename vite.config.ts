import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
