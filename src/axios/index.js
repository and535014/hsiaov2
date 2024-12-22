import axios from 'axios'

const location = window.location.origin

// 預設 API
export const api = axios.create({
  headers: {
    // 設定預設的 Content-Type 為 JSON
    'Content-Type': 'application/json',
  },
  baseURL: location,
})

// login 後使用
export const apiAuth = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: location,
})

// 取得檔案
export const apiAuthGetFile = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'blob', // 將 responseType 設置為 'blob'
  baseURL: location,
})

// 送出檔案
export const apiAuthPostFile = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  baseURL: location,
})

apiAuth.interceptors.response.use(
  (res) => {
    if (res.status !== 200) {
      console.log(res.status)
    }
    return res
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)
