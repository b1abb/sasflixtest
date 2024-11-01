export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],
  typescript: {
    typeCheck: true
  },
  srcDir: 'src/',
  css: [
    '~/assets/styles/fonts.scss',
    '~/assets/styles/layout.css',
  ]
})