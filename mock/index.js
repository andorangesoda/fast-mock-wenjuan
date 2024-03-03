/**
 * 汇总请求
 */
const quickstart = require('./quickstart')
const question= require('./question')
const user= require('./user')
const stat = require('./stat')
const answer = require('./answer')

const mockList = [
  ...quickstart,
  ...question,
  ...user,
  ...stat,
  ...answer
]

module.exports = mockList
