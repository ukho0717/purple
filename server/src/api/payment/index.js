import Router from 'koa-router';
import * as paymentCtrl from './payment.ctrl';

const payment = new Router();
payment.get('/', paymentCtrl.list);
payment.patch('/:premium', paymentCtrl.update);

export default payment;