import axios from 'axios'

import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

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
    ElMessage({ type: 'error', message: err.response.data.message })
    return Promise.reject(err)
  }
)

export default instance
