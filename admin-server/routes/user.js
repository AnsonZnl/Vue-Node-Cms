const koaBody = require('koa-body');
const Router = require('koa-router');
const router = new Router({
    prefix: '/user'
})


const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}
const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

// login
router.post('/login', koaBody(), async function (ctx) {
    console.log(ctx.request.body)
    const {
        username
    } = ctx.request.body
    const token = tokens[username]
    // mock error
    if (!token) {
        ctx.body = {
            code: 60204,
            message: 'Account and password are incorrect.'
        }
    }
    ctx.body = {
        code: 20000,
        data: token
    }
});

// user info
router.get('/info', async ctx => {
    const info = users['admin-token']
    console.log('info', ctx.request)
    // mock error
    if (!info) {
        ctx.body = {
            code: 50008,
            message: 'Login failed, unable to get user details.'
        }
    }
    ctx.body = {
        code: 20000,
        data: info
    }
})

// logout
router.post('/logout', async ctx => {
    ctx.body = {
        code: 20000,
        data: 'success'
    }
})

module.exports = router