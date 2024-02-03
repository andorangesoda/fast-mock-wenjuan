/**
 * 快速入门案例：随机生成名称
 * 具体 Random 参考：https://github.com/nuysoft/Mock/wiki/Getting-Started
 */
const Mock = require('mockjs')
const Random = Mock.Random

module.exports = [
  {
    url: '/api/quickstart',
    method: 'get',
    response() {
      return {
        code: 200,
        data: {
          id: Random.id(),
          name: Random.cname()
        }
      }
    }
  }
]
