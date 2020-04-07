const Router = require('koa-router');
const Article = require('../models/article');

const router = new Router({
    prefix: '/table'
})

router.get('/list', async ctx => {
    let res = await Article.find({})
    if(res){
        ctx.body = {
            code: 20000,
            data: {
                total: 30,
                items: res
            }
        }
    }
})

module.exports = router
