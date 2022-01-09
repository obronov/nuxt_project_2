export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#0057B8',
    throttle: 0,
    continuous: true
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/theme/default/scss/global'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/ymapPlugin',  mode: 'client' },
    { src: '@/plugins/swiper', mode: 'client' },
    { src: '@/plugins/picture-swipe', mode: 'client'},
    { src: '@/plugins/stickto', mode: 'client'},
    { src: '@/plugins/ultimate-skeleton-cards', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/device',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap' //модуль должен быть всегда последним в списке
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    fallback: true,
  },
  env: {
    appName: 'Стальпром',
    fakeUrl: process.env.FAKE_URL || 'http://192.168.1.55:4200/',
    baseUrl: process.env.BASE_URL || 'https://admin.stalprom.demoalente.ru/api/',
    clientUrl: 'https://stalprom.ru'
  },
  server: {
    port: process.env.SERVER_PORT || 4200,
    host: process.env.SERVER_IP || '192.168.1.55',
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    path: '/sitemap.xml',
    gzip: true,
    exclude: []
  }
  
}
