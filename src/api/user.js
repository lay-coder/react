import request from 'utils/request'

const login = (query) => {
  return request.post('/api/user/login', query, '登陆失败', '登陆成功')
}
const forceLogin = (query) => {
  return request.post('/api/user/forceLogin', query, '登陆失败', '登陆成功')
}
const logout = () => {
  return request.post('/api/user/logout', {}, '退出失败', '退出成功')
}
export {
  login,
  forceLogin,
  logout
}
