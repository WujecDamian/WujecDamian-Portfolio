import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// The stylesheet is small, so inline it to avoid a render-blocking request.
const inlineCss = (): Plugin => ({
  name: 'inline-css',
  enforce: 'post',
  transformIndexHtml: {
    order: 'post',
    handler(html, ctx) {
      if (!ctx.bundle) return html
      return html.replace(
        /<link rel="stylesheet"[^>]*href="\/([^"]+\.css)"[^>]*>/g,
        (tag, file: string) => {
          const asset = ctx.bundle?.[file]
          if (!asset || asset.type !== 'asset') return tag
          delete ctx.bundle![file]
          return `<style>${asset.source}</style>`
        },
      )
    },
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), inlineCss()],
})
