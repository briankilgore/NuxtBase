import axios from 'axios'

export const state = () => ({
  authUser: null,
  pageTitle: 'Home'
})

export const mutations = {
  SET_USER: function (state, authUser) {
    state.authUser = authUser
  },
  SET_PAGE_TITLE: function (state, pageTitle) {
    state.pageTitle = pageTitle
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    // console.log('nuxtServerInit', req.session)
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  login ({ commit }, { username, password }) {
    return axios.post('/api/login', {
      username,
      password
    })
    .then((response) => {
      commit('SET_USER', response.data)
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw new Error('Bad credentials')
      }
    })
  },
  logout ({ commit }) {
    return axios.post('/api/logout')
    .then(() => {
      commit('SET_USER', null)
    })
  },
  setPageTitle ({ commit }, pageTitle) {
    commit('SET_PAGE_TITLE', pageTitle)
  }
}

export const getters = {
  getAccessToken (state) {
    console.log('test')
    return new Promise((resolve, reject) => {
      var authInfo = state.authUser
      console.log(authInfo)

      if (authInfo && authInfo.token_expiration) { // if expired, try to get new access token from refresh token
        console.log('refreshing token....')
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
          reject(error)
        })
      } else {
        resolve(authInfo.access_token)
      }
    })
  }
}
