import Router from 'koa-router';
import * as chatCtrl from './chat.ctrl';

const chat = new Router();

chat.get('/', chatCtrl.chatUser);

export default chat;