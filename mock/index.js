/**
 * 汇总请求
 */
const quickstart = require('./quickstart')
const question= require('./question')
const user= require('./user')

const mockList = [
  ...quickstart,
  ...question,
  ...user
]

module.exports = mockList
