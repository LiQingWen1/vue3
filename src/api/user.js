import request from './request'
/**
 * @description  登录接口
 * @param {object} model 用户登录信息
 * @method
 */
const login = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}

export default { login }
