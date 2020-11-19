import Gram from '../../models/gram';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';
import User from '../../models/user';

const { ObjectId } = mongoose.Types;

export const write = async ctx => {
    console.log('write Post 호출');
    // console.log(ctx.request.body);
    // console.log(ctx.request.file);
    // console.log('!!!', ctx.req.file);
    // console.log('@@@', ctx.req.body);
    // const schema = Joi.object().keys({
    //     InstaImage: Joi.string().required(),
    //     content: Joi.string().required(),
    //     comment: Joi.array().items(Joi.string())
    // });

    // const result = schema.validate(ctx.request.body);
    // if(result.error){
    //     ctx.status = 400;
    //     ctx.body = result.error;
    //     return;
    // }
    // console.log('!!!!!', ctx.request.body);
    // console.log('9999', ctx.request);
    // console.log(ctx.req.file);
    // console.log('12345', ctx.req.file.filename);
    console.log(ctx.request.body);
    const { InstaImage, content } = ctx.request.body;    

    // const content = ctx.req.body.content;
    // const comment = ctx.req.body.comment;
    // const InstaImage = ctx.req.file.filename;
    console.log('content', content, ' InstaImage', InstaImage);
    console.log(ctx.state.user._id);
    const user_id = ctx.state.user._id; // 현재 로그인된 유저 정보
    // const user_id = '5f9f692d8413900d78dd8773';
    const user = await User.findById('5fb49e515a275b267019cf4a');
    console.log('user야 나와라',user);

    const post = new Gram({
        InstaImage: InstaImage,
        content: content,
        comment: [],
        User: {
            user_nick: user.user_nick,
            _id: user._id,
            profile_pic: user.profile_pic[0]
        }
    });
    try{
        await post.save();
        ctx.body = post;
        console.log('성공');
    }catch(e){
        ctx.throw(500, e);
    }
};

export const likeList = async ctx => {
    try{
        const posts = await Gram.find().sort({ likeCount: -1 }).limit(4).exec();
        // ctx.body = posts.map(post => post.toJSON());
        ctx.body = posts;
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
    console.log('read호출');
    console.log('로그인유저', ctx.state.user._id);
    const user_id = ctx.state.user._id; // 현재 로그인된 유저
    // const user_id = '5fadeabc05f6951e3818b1d6';
    const user = await User.findById(user_id);

    const { post_id } = ctx.params;
    // console.log(post_id);
    try{
        const post = await Gram.findById(post_id).exec();
        console.log('post',post);
        // console.log('user',user);
        ctx.body = post.toJSON();
        
    }catch(e){
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    console.log('delete호출');
    // console.log(ctx)
    // console.log(ctx.req.body);
    // console.log(ctx.request);
    // console.log(ctx.request.body);

    const { post_id } = ctx.params;
    console.log('지우기',post_id);
    try{
        await Gram.findByIdAndRemove(post_id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(500, e);
    }
}

export const updateLike = async ctx => {
    console.log('좋아요업데이트');
    const { post_id, heart } = ctx.params;
    // console.log('params', ctx.params);
    console.log('로그인유저', ctx.state.user._id);

    try{
        const post = await Gram.findById(post_id);
        console.log(post.likeCount);
        if(heart == 'plus'){
            console.log('plus');
            post.update({ likeCount: post.likeCount+1, $push: { likeUser: ctx.state.user._id }}).exec();
            ctx.body = post;
        }else{
            console.log('minus');
            post.update({ likeCount: post.likeCount-1 }).deleteOne({ likeUser: ctx.state.user._id }).exec();
            ctx.body = post;
        }
        // post.update({ likeCount: post.likeCount+1 }).exec();
    }catch(e){
        ctx.throw(500, e);
    }

    // const schema = Joi.object().keys({
    //     likeCount: Joi.number()
    // });
    // const result = schema.validate(ctx.request.body);

    // if(result.error){
    //     ctx.status = 400;
    //     ctx.body = result.error;
    //     return;
    // }

    // try{
    //     const post = await Gram.findByIdAndUpdate(post_id, ctx.request.body, {
    //         new: true,
    //     }).exec();
    //     if(!post){
    //         ctx.status = 404;
    //         return;
    //     }
    //     ctx.body = post;
    // }catch(e){
    //     ctx.throw(500, e);
    // }
}

export const updateComment = async ctx => {
    console.log('댓글업데이트');
    console.log('request',ctx.request.body);
    const { _id, nickName, text } = ctx.request.body;

    // const schema = Joi.object().keys({
    //     _id: Joi.string(),
    //     comment: Joi.array().items(Joi.object().keys({
    //         nickName: Joi.string(),
    //         text: Joi.string()
    //     }))
    // });

    // const result = schema.validate(ctx.request.body);

    // if(result.error){
    //     ctx.status = 400;
    //     ctx.body = result.error;
    //     console.log(result.error)
    //     return;
    // }

    try{
        const post = await Gram.findById(_id);
        console.log('글아이디',post._id);
        post.update({ $push: {comment: {nickName: nickName, text: text }}}).exec();
        ctx.body = post;

        // const post = await Gram.findByIdAndUpdate(post_id, ctx.request.body, {
        //     new: true,
        // }).exec();
        // if(!post){
        //     ctx.status = 404;
        //     return;
        // }
        // ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
}