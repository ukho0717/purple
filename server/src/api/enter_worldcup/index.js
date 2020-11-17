import Router from 'koa-router';
import * as worldcupCtrl from './worldcupCtrl.ctrl';

const worldcup = new Router();
worldcup.get('/', worldcupCtrl.list);

export default worldcup;