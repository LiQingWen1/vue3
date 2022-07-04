import request from './request'
/**
 * @description  登录接口
 * @param {object} model 用户登录信息
 * @method
 */
const login = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}
const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'get' })
}

export default { login, getUserInfo }
