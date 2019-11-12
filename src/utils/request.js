import axios from 'axios'

axios.defaults.timeout = 60 * 1000

const errorResult = { code: -1, body: null }

const http = async (method, url, query, errorMsg, successMsg) => {
  const config = {
    method,
    url,
    headers: {}
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
    console.log(json)
    return json
  } catch (err) {
    console.log(err)
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