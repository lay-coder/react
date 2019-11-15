import axios from 'axios'
import { message } from 'antd'
import { getToken } from './auth'

axios.defaults.timeout = 60 * 1000

const errorResult = { code: -1, body: null }
const hideTime = .5
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
          message.success(json.msg || successMsg, hideTime)
          break
        default:
          message.warning(json.msg || successMsg, hideTime)
          break
      }
    }
    return json
  } catch (err) {
    message.error('网络错误', hideTime)
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