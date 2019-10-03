import axios from 'axios'

axios.interceptors.response.use(null, (error) => {
  let err = {}
  if (error.status === 408 || error.code === 'ECONNABORTED') {
    err = { success: false, message: 'Oops. Server down' }
  } else if (error.response) {
    err = {
      success: error.response.data.success,
      message: error.response.data.error,
    }
  } else {
    err = {
      success: false,
      message: 'Oops. Something went wrong',
    }
  }
  return Promise.reject(err)
})

axios.interceptors.request.use(async (config) => {
  const user = JSON.parse(await localStorage.getItem('user'))
  if (user && user.token) {
    config.headers['x-auth-token'] = user.token
  }
  return config
})
