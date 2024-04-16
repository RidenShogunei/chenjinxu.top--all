import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000', // 替换为你的API地址
  timeout: 5000,
})

instance.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data
  } else {
    console.error('Response Error Information:', response)
  }
}, (error) => {
  console.error('Response Error Message:', error)
  return Promise.reject(error)
})

export default instance