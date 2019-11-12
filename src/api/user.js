import request from 'utils/request'

const login = (query) => {
  return request.post('/api/user/login', query, '登陆失败', '登陆成功')
}

export {
  login
}
