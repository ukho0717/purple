import BadBoard from '../../models/badBoard';
import Joi from '@hapi/joi';
import User from '../../models/user';

export const write = async ctx => {
    console.log('/badBoard write 호출');

    const { _id, reason } = ctx.request.body;

    const schema = Joi.object().keys({
        _id : Joi.string().required(),
        reason: Joi.string().required()
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const user = await User.findById(_id);
    const post = new BadBoard({
        reason,
        User: {
            user_nick: user.user_nick,
            profile_pic: user.profile_pic[0],
            _id: user._id
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
    console.log('/badBoard list 호출');

    try{
        const posts = await BadBoard.find().sort({ _id: -1 }).exec();
        ctx.body = posts.map(post => post.toJSON());
    }catch(e){
        ctx.throw(500, e);
    }
};

export const read = async (ctx) => {
    console.log('/badBoard list 호출');

    const { bad_id } = ctx.params;
    try{
        const post = await BadBoard.findById(bad_id).exec();
        ctx.body = post.toJSON();
    }catch(e){
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    console.log('/badBoard remove 호출');

    const { bad_id } = ctx.params;
    console.log(bad_id);
    try{
        await BadBoard.findByIdAndRemove(bad_id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const update = async ctx => {
    console.log('/badBoard update 호출');
    console.log(ctx.request.body);

    const { bad_id, reason } = ctx.request.body;

    const schema = Joi.object().keys({
        bad_id: Joi.string(),
        reason: Joi.string()
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try{
        const post = await BadBoard.findByIdAndUpdate(bad_id, {
            $set: { 
                reason: reason
            }
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