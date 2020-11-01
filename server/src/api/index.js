import Router from 'koa-router';
import posts from './enter_gram';
import badBoard from './notice_bad';
import faq from './notice_faq';
import payment from './payment';

import auth from './auth';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/badBoard', badBoard.routes());
api.use('/faq', faq.routes());
api.use('/payment', payment.routes());

api.use('/auth', auth.routes());

// api.get('/text', ctx => {
//     ctx.body = 'test 성공!';
// });

export default api;