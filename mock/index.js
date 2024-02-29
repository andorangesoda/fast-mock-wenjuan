/**
 * 汇总请求
 */
const quickstart = require('./quickstart')
const question= require('./question')
const user= require('./user')
const stat = require('./stat')

const mockList = [
  ...quickstart,
  ...question,
  ...user,
  ...stat
]

module.exports = mockList
