import User from '../../models/user';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

export const updateGender = async ctx => {
    console.log('/side updateGender 호출');

    const id = ctx.state.user._id;  // 로그인 유저

    const schema = Joi.object().keys({
        
    })

}