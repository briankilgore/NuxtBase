import { Router } from 'express'
import axios from 'axios'
import querystring from 'querystring'
import config from '../config'

var options = {
  baseURL: 'https://www.wrike.com'
}

var http = axios.create(options)

var wrikeAuthConfig = {
    authorizationURL: config.wrike.oauth.authorizationURL,
    tokenURL: config.wrike.oauth.tokenURL,
    clientID: config.wrike.oauth.clientID,
    clientSecret: config.wrike.oauth.clientSecret,
    callbackURL: 'http://127.0.0.1:3000/auth/callback'
}

var router = Router()

router.get('/auth', function (req, res) {
  // console.log(res)
  var url = `${wrikeAuthConfig.authorizationURL}?client_id=${wrikeAuthConfig.clientID}&response_type=code&redirect_uri=${wrikeAuthConfig.callbackURL}`

  res.redirect(url)
})

router.get('/auth/callback', function (req, res) {
  var error = (req.query && req.query.error) ? req.query.error : undefined
  var errorDescription = (req.query && req.query.error_description) ? req.query.error_description : undefined
  var authCode = (req.query && req.query.code) ? req.query.code : undefined

  if (error) {
    console.error(error, errorDescription)
  }

  var authParams = querystring.stringify({
    client_id: wrikeAuthConfig.clientID,
    client_secret: wrikeAuthConfig.clientSecret,
    grant_type: 'authorization_code',
    code: authCode,
    redirect_uri: wrikeAuthConfig.callbackURL
  })
  
  if (authCode) {
    http.post('/oauth2/token', authParams)
    .then((response) => {
      console.log('authorization successful', response.data)

      if (response.data) {
        var authInfo = {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
          token_expiration: Date.now() + ( response.data.expires_in * 1000 )
        }

        req.session.authUser = authInfo
      }

      // res.send('Callback completed')
      res.redirect('/')
    })
    .catch((error) => {
      console.log('authorization unsuccessful', error)
      res.redirect('/')
    })
  }
})

router.get('/auth/refresh', function (req, res) {
  var refreshToken = req.headers['x-refresh-token']

  if (refreshToken) {
    var authParams = querystring.stringify({
      client_id: wrikeAuthConfig.clientID,
      client_secret: wrikeAuthConfig.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })

    http.post('/oauth2/token', authParams)
    .then((response) => {
      console.log('refresh successful', response.data)

      if (response.data) {
        var authInfo = {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
          token_expiration: Date.now() + ( response.data.expires_in * 1000 )
        }

        req.session.authUser = authInfo
      }

      res.json(authInfo)
    })
    .catch((error) => {
      console.log('refresh unsuccessful', error)
      res.redirect('/')
    })
  }
})

export default router
