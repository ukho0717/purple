import User from '../../models/user';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const list = async ctx => {
    ctx.body = '결제목록'
};

export const update = async ctx => {
    console.log('결제 update');
    console.log('params', ctx.params);
    console.log('결제로그인유저', ctx.state.user._id);
    const { premium } = ctx.params;
    const id = ctx.state.user._id;

    const schema = Joi.object().keys({
        premium: Joi.string().required()
    });

    const result = schema.validate(ctx.params);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }
    
    try{
        const post = await User.findByIdAndUpdate(id, ctx.params, {
            new: true
        }).exec();
        console.log('post', post);
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
}