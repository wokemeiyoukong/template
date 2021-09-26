import service from './request'

import { AnyConfig } from '@/tsconfig/interface'

import { Toast } from 'vant'

// * axios的二次封装
const BATH_URL = process.env.VUE_APP_BATH_API_URL // 生产

export default ({
  url,
  method = 'get',
  data,
  params,
  responseType,
  bathUrl
}: AnyConfig) => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner'
    // duration: 0
  })
  return service({
    baseURL: bathUrl || BATH_URL,
    url,
    method,
    data,
    params: {
      ...params
    },
    responseType
  }).then((res: AnyConfig) => {
    if (res.code === 200) {
      Toast.clear()
    }
    return res
  }).catch((err: AnyConfig) => {
    console.log(err)
    Toast({
      message: '请求错误',
      forbidClick: true,
      duration: 1000
    })
  })
}
