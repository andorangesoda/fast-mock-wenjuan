const Mock = require('mockjs')
const getQuestionData = require('./data/getQuestionData')
const getComponentList = require('./data/getComponentList')

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
          title: Random.ctitle(),
          desc: '问卷描述',
          js: '',
          css: '',
          isDeleted: false,
          isPublished: true,
          componentList: getComponentList()
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
    response(ctx) {
      // 获取上下文的地址中的参数, ctx 中默认将 url 中的参数包装成了 query  对象
      const { url = '', query = {} } = ctx
      const isStar = url.indexOf('isStar=true') >=0
      const isDeleted = url.indexOf('isDeleted=true') >=0
      const page = parseInt(query.pageSize) || 1
      const pageSize = parseInt(query.pageSize) || 10

      return {
        errno: 0,
        data: {
          list: getQuestionData({isStar, isDeleted, page, pageSize}),
          total: 100
        }
      }
    }
  },
  {
    // 更新问卷
    url: '/api/question/:id',
    method: 'patch',
    response() {
      return {
        errno: 0
      }
    }
  },
  {
    // 复制问卷
    url: '/api/question/duplicate/:id',
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
    // 批量彻底删除
    url: '/api/question',
    method: 'delete',
    response() {
      return {
        errno: 0
      }
    }
  }
]
