import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
// import koaBody from 'koa-body';
import koaMulter from 'koa-multer';

const path = require('path');
// const multer = require('multer');

let storage = koaMulter.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        let extension = path.extname(file.originalname);
        let basename = path.basename(file.originalname, extension);
        callback(null, basename + "_" + Date.now() + extension);
    }
});

let upload = koaMulter({
    storage: storage,
    limits: {
        files: 1,
        fileSize: 1024 * 1024 * 1024
    }
});

const posts = new Router();
posts.get('/like', postsCtrl.likeList);
posts.get('/', postsCtrl.list);

// posts.get('/write', async ctx => {
//     console.log('/write 호출')
//     ctx.body = '<h2>파일 업로드</h2><form method="post" action="/api/posts" enctype="multipart/form-data"><p><label>내용 : <input type="text" name="content"></label></p><p><label>댓글 : <input type="text" name="comment"></label></p><p><label>사진 : <input type="file" name="file"></label></p><p><input type="submit" value="전송"></p></form>';
// });
// posts.post('/', koaBody({ multipart: true }), upload.array('photo', 1), postsCtrl.write);
posts.post('/', upload.single('file'), postsCtrl.write);

// const post = new Router();
posts.get('/:post_id', postsCtrl.read);
posts.delete('/:post_id', postsCtrl.remove);
// post.patch('/:id', postsCtrl.update);

export default posts;