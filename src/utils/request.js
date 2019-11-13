import axios from 'axios'
import { Message } from 'element-react'
import { getToken } from './auth'

axios.defaults.timeout = 60 * 1000

const errorResult = { code: -1, body: null }

const http = async (method, url, query, errorMsg, successMsg) => {
  const config = {
    method,
    url,
    headers: {
      Authorization: getToken()
    }
  }
  switch (method) {
    case 'GET':
      config.params = query
      break
    case 'POST':
      config.data = query
      break
    default:
      break
  }
  try {
    const response = await axios(config)
    const json = response.data
    if (json) {
      switch (json.code) {
        case 0:
          Message.success(json.msg || successMsg)
          break
        default:
          break
      }
    }
    return json
  } catch (err) {
    Message.error(err || '网络错误')
  }
  return errorResult
}
const request = {
  get(url, query = {}, errorMsg = '', successMsg = '') {
    return http('GET', url, query, errorMsg, successMsg)
  },
  post(url, query, errorMsg = '', successMsg = '') {
    return http('POST', url, query, errorMsg, successMsg)
  }
}

export default request