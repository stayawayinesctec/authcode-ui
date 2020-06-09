import dotenv from 'dotenv'
dotenv.config()

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-i18n'
  ],
  auth: {
    strategies: {
      keycloak: {
        _scheme: 'oauth2',
        authorization_endpoint: `${process.env.KEYCLOAK_URL}/auth/realms/bag-pts/protocol/openid-connect/auth`,
        userinfo_endpoint: `${process.env.KEYCLOAK_URL}/auth/realms/bag-pts/protocol/openid-connect/userinfo`,
        logout_endpoint: `${process.env.KEYCLOAK_URL}/auth/realms/bag-pts/protocol/openid-connect/logout`,
        access_type: 'offline',
        access_token_endpoint: `${process.env.KEYCLOAK_URL}/auth/realms/bag-pts/protocol/openid-connect/token`,
        response_type: 'code',
        token_type: 'Bearer',
        token_key: 'access_token',
        client_id: 'ha-ui-web-client',
        scope: 'openid',
        grant_type: 'authorization_code'
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/callback',
      home: '/'
    }
    //plugins: ['~/plugins/auth.js']
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    locales: [
      {
        code: 'en',
        file: 'en-US.js'
      },
      {
        code: 'pt',
        file: 'pt-PT.js'
      }
    ],
    lazy: true,
    langDir: 'i18n/'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    middleware: ['auth']
  }
}
