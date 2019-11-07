import axios from 'axios'
import { getToken } from 'utils/auth'
const request = {
  get(url, query = {}, errorMessage = '获取数据失败', successMessage = '') {
    return http('GET', url, query, errorMessage, successMessage)
  },
  post(url, query, errorMessage = '发送数据失败', successMessage = '发送数据成功', ) {
    return http('POST', url, query, errorMessage, successMessage)
  }
}
const http = async (method, url, query, errorMessage, successMessage) => {
  const config = {
    url,
    method,
    withCredentials: true,
    headers: {
      Authorization: getToken()
    }
  }
  let requests
  switch (method) {
    case 'GET':
      config.params = query
      requests = axios(config)
      break
    case 'POST':
      config.data = query
      requests = axios.post(url, query, config)
      break
    default:
      break
  }
  let response
  try {
    response = await requests
    console.log(response)
    const json = response.data
    return json
  } catch (e) {
    console.log(e)
  }
}
export default request