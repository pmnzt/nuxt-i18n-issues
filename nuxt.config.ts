// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        name: 'English',
        code: 'en',
        dir: 'ltr',
        iso: 'en-US'
      },
      {
        name: 'العربية',
        code: 'ar',
        dir: 'rtl',
        iso: 'ar-YE'
      },
    ],
  },
})