/**
 * 汇总请求
 */
const quickstart = require('./quickstart')
const question= require('./question')

const mockList = [
  ...quickstart,
  ...question,
]

module.exports = mockList
