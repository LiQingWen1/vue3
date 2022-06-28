import request from './request'
import md5 from 'md5'
/**
 * @description  登录接口
 * @param {object} model 用户登录信息
 * @method
 */
const login = (model) => {
  model.password = md5(model.password)
  return request.post('/sys/login', model)
}

export default { login }
