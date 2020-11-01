import Router from 'koa-router';
import * as badBoardCtrl from './badBoard.ctrl';

const badBoard = new Router();
badBoard.get('/', badBoardCtrl.list);
badBoard.post('/', badBoardCtrl.write);

badBoard.get('/:id', badBoardCtrl.read);
badBoard.delete('/:id', badBoardCtrl.remove);
badBoard.patch('/:id', badBoardCtrl.update);

export default badBoard;