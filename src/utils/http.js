import axios from 'axios'

const instance = axios.create({
  timeout: 5000,
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
})
instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    Promise.reject(err)
  }
)

instance.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    if (err.response && err.response.status === 401) {
      // router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default instance
