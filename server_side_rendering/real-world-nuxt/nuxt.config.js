import bodyParser from 'body-parser'
import session from 'express-session'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      // { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" }
      {
        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      }
    ],
    script:[
      {
        src:"https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // '~/assets/scss/main.scss',
    { src: '~/assets/css/main.scss', lang: 'scss' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/firebase.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/bulma',
    //OR like this
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ]
  ],

  serverMiddleware:[
    // bodyParser.json(),
    // // session middleware
    // session({
    //   secret: 'super-secret-key',
    //   resave: false,
    //   saveUninitialized: false,
    //   cookie: { maxAge: 60000 }
    // }),
    '~/api'
  ],

  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config) {
      config.resolve.alias['@fortawesome/fontawesome-free-brands$'] = '@fortawesome/fontawesome-free-brands/shakable.es.js'
      config.resolve.alias['@fortawesome/fontawesome-free-solid$'] = '@fortawesome/fontawesome-free-solid/shakable.es.js'
    }
  }


}
