import User from '../../models/user';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const list = async ctx => {
    ctx.body = '결제목록'
};

export const update = async ctx => {
    console.log('/payment update 호출');

    console.log(ctx.params);
    console.log(ctx);

    // const { premium } = ctx.params;
    // const id = ctx.state.user._id;

    // try{
    //     const post = await User.findByIdAndUpdate(id, { premium: premium }, {
    //         new: true
    //     }).exec();
    //     console.log('post', post);
    //     if(!post){
    //         ctx.status = 404;
    //         return;
    //     }
    //     ctx.body = post;
    // }catch(e){
    //     ctx.throw(500, e);
    // }
}