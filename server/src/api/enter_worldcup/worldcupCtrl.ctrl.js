import mongoose from 'mongoose';
import Joi from '@hapi/joi';
import User from '../../models/user';

export const list = async ctx => {
    const my_id = ctx.state.user._id;
    try {
        let userList = await User.find().exec();
        userList = userList.map(user => user._id).filter(_id => _id != my_id).sort(function() {
            return Math.random() - 0.5;
        }).splice(0, 4);

        // console.log('유저리스트',userList);
        ctx.body = userList;
    }catch(e){
        ctx.throw(500, e);
    }
}