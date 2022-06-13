import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import router from '@/router/index'

// 接口响应通过格式
export interface HttpResponse {}

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_API,
  // 超时
  timeout: 30000
})

// 返回其他状态吗
service.defaults.validateStatus = (status: number): boolean => {
  return status >= 200 && status <= 500 // 默认的
}

/**
 * HTTP request 拦截
 */
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    /* eslint-disable */
    // @ts-ignore
    const quest: AxiosRequestConfig = { ...config }

    /* eslint-disable */
    return quest
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

/**
 * HTTP response 拦截
 */
service.interceptors.response.use(
  (res: AxiosResponse) => {
    const status = Number(res.status) || 200
    if (res.data.code === 401) router.push('/login')
    return res.data
  },
  err => {
    const { response } = err
    return Promise.reject(response || err)
  }
)

export default service
