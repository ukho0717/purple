import Router from 'koa-router';
import * as faqCtrl from './faq.ctrl';

const faq = new Router();
faq.get('/', faqCtrl.list);
faq.post('/', faqCtrl.write);

faq.get('/:id', faqCtrl.read);
faq.delete('/:id', faqCtrl.remove);
faq.patch('/:id', faqCtrl.update);

export default faq;