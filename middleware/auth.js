// import axios from 'axios'

export default function ({ store, redirect, error }, callback) {
  console.log('auth middleware', store.state)

  // If user not connected, redirect to /
  if (!store.state.authUser) {
    return redirect('/login')
    // error({
    //   message: 'You are not connected',
    //   statusCode: 403
    // })
  } else {
    // console.log(store.state.authUser)
    callback()

    // axios.get('http://127.0.0.1:3000/auth/refresh', {
    //   params: {
    //     'refreshToken': store.state.authUser.refreshToken
    //   }
    // })
    // .then((response) => {
    //   console.log('Access Token Refreshed', response)

    //   let access = response.data
    //   store.commit('SET_USER', access)
    //   callback()
    // })
    // .catch((error) => {
    //   console.error(error)
    // })
  }
}
