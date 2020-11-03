import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();
posts.get('/like', postsCtrl.likeList);
posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

// const post = new Router();
posts.get('/:post_id', postsCtrl.read);
posts.delete('/:post_id', postsCtrl.remove);
// post.patch('/:id', postsCtrl.update);

export default posts;