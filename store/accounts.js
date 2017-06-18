import axios from 'axios'

export const state = () => ({
  list: []
})

export const mutations = {
  set: function (state, accounts) {
    state.list = accounts
  }
}

export const actions = {
  fetch ({ state, dispatch, commit, rootState, rootGetters }) {
    rootGetters.getAccessToken
    .then((accessToken) => {
      axios.get('https://www.wrike.com/api/v3/accounts', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        console.log('Accounts retrieved', response)
        commit('set', response.data.data)
      })
      .catch((error) => {
        console.error(error)
      })
    })
  }
}
