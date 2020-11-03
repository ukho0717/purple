import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import koaBody from 'koa-body';

const posts = new Router();
posts.get('/like', postsCtrl.likeList);
posts.get('/', postsCtrl.list);

posts.get('/write', async ctx => {
    console.log('/write 호출')
    ctx.body = '<h2>파일 업로드</h2><form method="post" action="/api/posts" enctype="multipart/form-data"><p><label>내용 : <input type="text" name="content"></label></p><p><label>댓글 : <input type="text" name="comment"></label></p><p><label>사진 : <input type="file" name="InstaImage"></label></p><p><input type="submit" value="전송"></p></form>';
});
posts.post('/', koaBody({ multipart: true }), postsCtrl.write);

// const post = new Router();
posts.get('/:post_id', postsCtrl.read);
posts.delete('/:post_id', postsCtrl.remove);
// post.patch('/:id', postsCtrl.update);

export default posts;