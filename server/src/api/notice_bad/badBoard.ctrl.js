import BadBoard from '../../models/badBoard';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const write = async ctx => {
    // console.log('badBoard write');
    const schema = Joi.object().keys({
        reason: Joi.string().required()
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { reason } = ctx.request.body;
    const post = new BadBoard({
        reason,
        User: {
            user_nick: '임시',// 수정해야함
            Join_user: {
                profile_pic: '임시.png'
            }
        }
    });
    try{
        await post.save();
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const list = async ctx => {
    try{
        const posts = await BadBoard.find().sort({ _id: -1 }).exec();
        ctx.body = posts.map(post => post.toJSON());
    }catch(e){
        ctx.throw(500, e);
    }
};

export const read = async (ctx) => {
    const { id } = ctx.params;
    console.log(id);
    try{
        const post = await BadBoard.findById(id).exec();
        ctx.body = post.toJSON();
    }catch(e){
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    const { id } = ctx.params;
    console.log(id);
    try{
        await BadBoard.findByIdAndRemove(id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const update = async ctx => {
    const { id } = ctx.params;

    const schema = Joi.object().keys({
        reason: Joi.string()
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try{
        const post = await BadBoard.findByIdAndUpdate(id, ctx.request.body, {
            new: true
        }).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};