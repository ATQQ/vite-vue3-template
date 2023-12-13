import ajax from '../ajax'

/**
 * 获取验证码 - 有固定返回值格式
 * @param phone 手机号
 */
function getCode(phone: string): ResponseData<{ num: number }> {
  return ajax.get('random/code', {
    params: {
      phone
    }
  })
}

/**
 * 获取验证码 - 无固定返回值格式
 * @param phone 手机号
 */
function getCode2(phone: string): Promise<{ num: number }> {
  return ajax.get('random/code', {
    params: {
      phone
    }
  })
}

export default {
  getCode,
  getCode2
}
