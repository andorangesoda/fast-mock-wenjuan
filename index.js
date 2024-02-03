const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock/index')

const app = new Koa()
const router = new Router()

// 模拟网络 1s 延迟
async function getRes(fn) {
  return new Promise(reslove => {
    setTimeout(()=>{
      const res = fn()
      reslove(res)
    }, 1000)
  })
}

// 注册 mock 路由
mockList.forEach(item => {
  const {url, method, response} = item
  router[method](url, async ctx =>{
    const res = await getRes(response)
    ctx.body = res
  })
})

app.use(router.routes())

// 监听端口
const port = 3001
app.listen(port, () => {
  console.log(`Mock server is running on http://localhost:${port}/`)
  console.log(`You can view demo in http://localhost:${port}/api/quickstart`)
});
