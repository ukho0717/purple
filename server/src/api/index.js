import Router from 'koa-router';

const api = new Router();

// api.use('/gram', gram.routes());

api.get('/text', ctx => {
    ctx.body = 'test 성공!';
});

export default api;