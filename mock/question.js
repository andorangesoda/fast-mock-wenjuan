const Mock = require('mockjs')
const getQuestionData = require('./data/getQuestionData')

const Random = Mock.Random

/**
 * 问卷相关 API
 */
module.exports = [
  {
    // 获取单个问卷
    url: '/api/question/:id',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle()
        }
      }
    }
  },
  {
    // 创建问卷
    url: '/api/question',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      }
    }
  },
  {
    // 获取问卷列表
    url: '/api/question',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          list: getQuestionData(),
          total: 100
        }
      }
    }
  }
]
