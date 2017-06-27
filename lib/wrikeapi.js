import * as axios from 'axios'

let options = {
  baseURL: 'https://www.wrike.com/api/v3'
}

let http = axios.create(options)

function WrikeAPI (authProc) {
  this.ajax = function (endpoint, requestSettings, complete) {
    var fetch = function (err, accessHeaders) {
      if (err) {
        complete(err, null)
      } else {
        requestSettings.headers = accessHeaders

        http(endpoint, requestSettings)
        .then((response) => {
          console.log('fetch successful')
          complete(null, response)
        })
        .catch((error) => {
          console.error(error)
          console.log('fetch unsuccessful')
          complete(error, null)
        })
      }
    }

    authProc(null, fetch)
  }

  this.get = function (endpoint, complete) {
    var requestSettings = {
      method: 'get',
      responseType: 'json'
    }

    this.ajax(endpoint, requestSettings, complete)
  }

  this.post = function (endpoint, data, complete) {
    var requestSettings = {
      method: 'post',
      responseType: 'json',
      data: data
    }

    this.ajax(endpoint, requestSettings, complete)
  }
}

var getAccessHeaders = function (err, complete) {
  if (err) {
    console.error(err)
  } else {
    var authInfo = {
      refreshToken: 'js7dWEHnaMsuLjdTD8cu2wtC7oPgyuJ1Y1FGh7s69RKvkokroclqPTVh807Z5fEW-A-N'
    }

    if (authInfo && authInfo.tokenExpiration > (Date.now() - 10000)) { // check to see if expired. includes 10s "buffer" to guard against tokens expiring in flight!
      complete(null, { Authorization: 'Bearer ' + authInfo.accessToken })
    } else if (authInfo && authInfo.refreshToken) { // if expired, try to get new access token from refresh token
      axios.get('/auth/refresh', {
        params: {
          refreshToken: authInfo.refreshToken
        }
      })
      .then((response) => {
        console.log('Token Refreshed', response)

        complete(null, { Authorization: 'Bearer ' + response.data.accessToken })
      })
      .catch((error) => {
        console.error(error)

        complete(error)
      })
    } else {
      // authorize(complete);
      complete(undefined, 'Unable to retrieve access token. May need to re-authorize.') // possibly redirect to /login route?
    }
  }
}

let WrikeApi = new WrikeAPI(getAccessHeaders)

export default WrikeApi
