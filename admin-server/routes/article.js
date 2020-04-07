const Router = require('koa-router');
const koaBody = require('koa-body');
const moment = require('moment');
const querystring = require('querystring')
const Article = require('../models/article');
const router = new Router({
    prefix: '/article'
})

// 创建文章
router.post('/', koaBody(), async ctx => {
    let create_date = moment().format('YYYY-MM-DD hh:mm:ss')
    let {title, author, content} = ctx.request.body
    let result = await Article.create({
        title,
        author,
        content,
        create_date,
        id: 5,
        pv: 1
    })
    if (result._id) {
        ctx.response.body = {
            mes: 'ok',
            code: 20000
        }
        ctx.response.status = 201;
    }else{
        throw err;
    }
})

// 查找文章
router.get('/', async ctx => {
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

// 删除文章
router.delete('/', koaBody(), async ctx=>{
    let query = querystring.parse(ctx.request.url, "?")
    let id = query.id;
    let res = await Article.deleteOne({_id: id})
    if(res){
        ctx.body = {
            code: 20000,
            mes: '删除成功'
        }
    }
})

// 查看单条 /:id  使用ctx.parsms.id
router.get('/:id', async ctx=> {
    let id = ctx.params.id;
    console.log(id);
   let res = await Article.findOne({_id: id})
   if(res._id){
    ctx.body = {
        code: 20000,
        data: res
    }
   }else{
       ctx.body={
           code: 40001,
           mes: '找不到'
       }
   }
})

module.exports = router