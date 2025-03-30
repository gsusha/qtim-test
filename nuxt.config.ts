export default defineNuxtConfig({
  runtimeConfig: {
    appEnv: process.env.APP_ENV,
  },

  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  },

  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },

  css: [
    '@/assets/styles/index.scss'
  ],

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxtjs/i18n', 'nuxt-svgo'],

  // закладываю i18n в связи с тем, что на макете есть языковой свитчер
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
    ],
    defaultLocale: 'en',
  },

  svgo: {
    autoImportPath: '@/assets/images/',
    defaultImport: 'component',
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              inlineStyles: {
                onlyMatchedOnce: false
              },
              removeDoctype: false,
              removeViewBox: false
            }
          }
        }
      ]
    }
  },

  fonts: {
    families: [
      {
        name: 'TTCommons',
        src: '/fonts/TTCommons.woff',
        provider: 'local',
        weights: [400],
        styles: ['normal'],
      }
    ],
  },

  compatibilityDate: '2025-03-30',
})