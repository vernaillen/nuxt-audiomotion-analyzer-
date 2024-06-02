// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    'nuxt-audiomotion-analyzer',
    '@nuxt/eslint',
    '@nuxt/ui'
  ],
  nuxtAudiomotionAnalyzer: {
    defaultOptions: {
      mode: 5,
      barSpace: 0.25,
      gradient: 'rainbow',
      ledBars: false,
      lumiBars: false,
      radial: false,
      reflexAlpha: 0.25,
      reflexBright: 1,
      reflexFit: true,
      reflexRatio: 0.3,
      showBgColor: false,
      showPeaks: true,
      overlay: false
    }
  },
  ui: {
    icons: ['mdi', 'simple-icons']
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    },
    checker: {
      lintOnStart: true,
      fix: true
    }
  },
  devtools: { enabled: true }
})
