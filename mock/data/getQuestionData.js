const Mock = require('mockjs')
const Random = Mock.Random

/**
 * 生成问卷列表数据
 */
function getQuestionList(opt = {}){
  const { isDeleted = false, isStar = false, pageSize = 10 } = opt
  const list = []
  for (let i = 0; i < pageSize; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar: isStar ? isStar : Random.boolean(),
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isDeleted,
    })
  }
  return list
}

module.exports = getQuestionList
