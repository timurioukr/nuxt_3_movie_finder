// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      apiBaseUrl: process.env.API_BASE_URL,
      imgBaseUrl: process.env.PUBLIC_IMAGE_BASE_URL
    }
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    }
  },
  typescript: {
    typeCheck: true
  }
})
