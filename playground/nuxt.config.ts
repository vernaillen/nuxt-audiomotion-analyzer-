export default defineNuxtConfig({
  modules: ['../src/module'],
  nuxtAudiomotionAnalyzer: {
    defaultOptions: {
      height: 400
    }
  },
  devtools: { enabled: true }
})
