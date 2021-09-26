import * as axios from 'axios'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

const baseURL = process.env.VUE_APP_URL

// * 创建axios实例
const service = axios.default.create({
  baseURL,
  headers: {
    'Content-type': 'application/json'
  },
  timeout: 10000,
  maxContentLength: 4000
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (Error) => {
    Promise.reject(Error)
  })

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
