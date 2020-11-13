import Router from 'koa-router';
import * as chatCtrl from './chat.ctrl';

const chat = new Router();

chat.get('/', chatCtrl.chatUser);
chat.use("/:id", chatCtrl.getUserById, chat.routes());


export default chat;