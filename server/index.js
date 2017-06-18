import Nuxt from 'nuxt'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import localtunnel from 'localtunnel'
import dotenv from 'dotenv'
dotenv.config()
import config from '../config'

const app = express()
const host = config.app.host
const port = config.app.port

app.set('port', port)

// Body parser, to access req.body
app.use(bodyParser.json());

// Sessions to create req.session
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 }
}));

// Import API Routes
import api from './api'
app.use(api)

// Import auth Routes
import auth from './auth.js'
app.use(auth)

// Start nuxt.js
async function start() {
  // Import and Set Nuxt.js options
  let nuxtConfig = require('../nuxt.config.js')
  nuxtConfig.dev = !(config.app.env === 'production')

  // Instanciate nuxt.js
  const nuxt = new Nuxt(nuxtConfig)

  // Add nuxt.js middleware
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

  // Start localtunnel in dev
  // if (nuxtConfig.dev) {
  //   var tunnel = localtunnel(port, {
  //     subdomain: config.app.name,
  //     local_host: host
  //   }, function (err, tunnel) {
  //     if (err) {
  //       console.error(err)
  //     } else {
  //       console.log('Tunnel opened on: ' + tunnel.url)
  //     }
  //   })
  // }

}

start()
