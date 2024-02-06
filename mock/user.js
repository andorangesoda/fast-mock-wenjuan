const Mock = require('mockjs')

const Random = Mock.Random

module.exports = [
  {
    // 注册
    url: '/api/user/register',
    method: 'post',
    response() {
      return {
        errno: 0
      }
    }
  },
  {
    // 登录
    url: '/api/user/login',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          token: Random.word(20)
        }
      }
    }
  },
  {
    // 获取用户信息
    url: '/api/user/info',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          username: Random.cname(),
        }
      }
    }
  }
]
