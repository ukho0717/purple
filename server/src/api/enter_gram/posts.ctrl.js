import Gram from '../../models/gram';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';
import User from '../../models/user';

const { ObjectId } = mongoose.Types;

export const write = async ctx => {
    const schema = Joi.object().keys({
        InstaImage: Joi.string().required(),
        content: Joi.string().required(),
        comment: Joi.array().items(Joi.string())
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { InstaImage, content, comment } = ctx.request.body;
    console.log('접속유저: ',ctx.state.user._id);
    const user_id = ctx.state.user._id;
    const user_nick = await User.findById(user_id).user_nick;
    console.log(user_nick);

    const post = new Gram({
        InstaImage,
        content,
        comment,
        User: {
            user_nick: user_nick
        }
    });
    try{
        await post.save();
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const likeList = async ctx => {
    try{
        const posts = await Gram.find().sort({ likeCount: -1 }).limit(4).exec();
        ctx.body = posts.map(post => post.toJSON());
    }catch(e){
        ctx.throw(500, 0);
    }
}

export const list = async ctx => {
    try{
        const posts = await Gram.find().sort({ _id: -1 }).exec();
        ctx.body = posts.map(post => post.toJSON());
    }catch(e){
        ctx.throw(500, e);
    }
};

export const read = async (ctx) => {
    const { id } = ctx.params;
    console.log(id);
    try{
        const post = await Gram.findById(id).exec();
        ctx.body = post.toJSON();
    }catch(e){
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    const { id } = ctx.params;
    console.log(id);
    try{
        await Gram.findByIdAndRemove(id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(500, e);
    }
}