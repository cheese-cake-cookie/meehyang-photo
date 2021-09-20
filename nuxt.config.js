export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'meehyang photo',
    titleTemplate: '%s - meehyang photo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'meehyang photo' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
      }, 
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/reset.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      // use underscore "_" & also file extension ".scss"
      '~/assets/css/variables.scss',
      '~/assets/css/mixins.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', '@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {}
};
