import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 500
})

request.interceptors.request.use(config => { 
  config.headers['X-Proxy-Encrypt'] = window.localStorage.getItem('token')
  return config
})

export default request

