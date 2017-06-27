import * as axios from 'axios'

function WrikeAPI (authInfo) {

}

function getAccessToken (authInfo) {
  return new Promise((resolve, reject) => {
    if (authInfo && authInfo.token_expiration < (Date.now() - 10000) && authInfo.refresh_token) { // if expired, try to get new access token from refresh token
      axios.get('/auth/refresh', {
        headers: {
          'x-refresh-token': authInfo.refresh_token
        }
      })
      .then((response) => {
        console.log('Token Refreshed', response)
        resolve(response.data.access_token)
      })
      .catch((error) => {
        console.error(error)
      })
    } else {
      resolve(authInfo.access_token)
    }
  })
}

    // getAccessToken(rootState.authUser)
    // .then((accessToken) => {
    //   axios.get('https://www.wrike.com/api/v3/accounts', {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`
    //     }
    //   })
    //   .then((response) => {
    //     console.log('Accounts retrieved', response)
    //     commit('set', response.data.data)
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
    // })
