import User from '../../models/user';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

export const updateGender = async ctx => {
    console.log('/side updateGender 호출');

    const _id = ctx.state.user._id;  // 로그인 유저

    const schema = Joi.object().keys({
        match_gender: Joi.string().required()
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try {
        const post = await User.findByIdAndUpdate(_id, ctx.request.body, {
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

}