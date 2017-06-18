import axios from 'axios'
import querystring from 'querystring'

export const state = () => ({
  list: []
})

export const mutations = {
  set: function (state, webhooks) {
    state.list.push(...webhooks)
  },
  delete: function (state, webhookId) {
    for (var i = 0; i < state.list.length; i++) {
      if (state.list[i].id === webhookId) {
        state.list.splice(i, 1)
      }
    }
  }
}

export const actions = {
  fetch ({ state, dispatch, commit, rootState, rootGetters }, activeAccount) {
    rootGetters.getAccessToken
    .then((accessToken) => {
      var url = (!activeAccount) ? 'https://www.wrike.com/api/v3/webhooks' : 'https://www.wrike.com/api/v3/accounts/' + activeAccount + '/webhooks'

      axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        console.log('Webhooks retrieved', response)
        commit('set', response.data.data)
      })
      .catch((error) => {
        console.error(error)
      })
    })
  },
  add ({ state, dispath, commit, rootState, rootGetters }, webhook) {
    rootGetters.getAccessToken
    .then((accessToken) => {
      var url = 'https://www.wrike.com/api/v3/accounts/' + webhook.account + '/webhooks'

      var data = querystring.stringify({
        hookUrl: webhook.hookUrl
      })

      axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        console.log('Webhook added', response)
        commit('set', response.data.data)
      })
      .catch((error) => {
        console.error(error)
      })
    })
  },
  delete ({ state, dispath, commit, rootState, rootGetters }, webhookId) {
    rootGetters.getAccessToken
    .then((accessToken) => {
      var url = 'https://www.wrike.com/api/v3/webhooks/' + webhookId

      axios.delete(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        console.log('Webhook deleted', response)
        commit('delete', webhookId)
      })
      .catch((error) => {
        console.error(error)
      })
    })
  }
}

export const getters = {
  webhooks: (state, getters, rootState) => {
    return state.list.map((webhook, index, webhooks) => {
      var account = rootState.accounts.list.find((item, index) => {
        return item.id === webhook.accountId
      })

      webhook.accountName = (account && account.name) ? account.name : ''

      return webhook
    })
  }
}
