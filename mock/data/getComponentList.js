const Mock = require('mockjs')
const Random = Mock.Random

function getComponentList() {
  return [
    // Info
    {
      // 注意，由于统计页，左侧和中间需要数据完全一直，所以要写死 fe_id ，不能用 Random.id()
      fe_id: 'c1',
      type: 'questionInfo',
      title: '问卷信息',
      isHidden: false,
      isLocked: false,
      props: { title: '问卷标题', desc: '问卷描述...' }
    },
    // Title
    {
      fe_id: 'c2',
      type: 'questionTitle',
      title: '标题',
      isHidden: false,
      isLocked: false,
      props: { text: '个人信息调研', level: 1, isCenter: false }
    },
    // Input
    {
      fe_id: 'c3',
      type: 'questionInput',
      title: '输入框1',
      isHidden: false,
      isLocked: false,
      props: { title: '你的姓名', placeholder: '请输入姓名...' }
    },
    // Input
    {
      fe_id: 'c4',
      type: 'questionInput',
      title: '输入框2',
      isHidden: false,
      isLocked: false,
      props: { title: '你的电话', placeholder: '请输入电话...' }
    },
  ]
}

module.exports = getComponentList
