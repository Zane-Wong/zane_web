import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';
const noAttr = () => {
  return {
    name: "no-attribute",
    transformIndexHtml(html: string) {
      html = html.replace(`type="module" crossorigin`, `type="module"`);
      return html.replace(`crossorigin`,'');
    }
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),noAttr()],
  base: './',
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src',import.meta.url))//
  //   }
  // }
})