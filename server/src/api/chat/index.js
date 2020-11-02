import Router from 'koa-router';
import * as chatCtrl from './chat.ctrl';

const chat = new Router();

chat.get('/', chatCtrl.matching)        // 매칭(방만들어짐)
chat.get('/join', chatCtrl.join)        // 채팅방 입장
chat.get('/message', chatCtrl.send);    // 메세지 보내기
chat.post('/block', chatCtrl.block)     // 차단하기
chat.get('/cancel', chatCtrl.cancel)    // 매치 취소

export default chat;