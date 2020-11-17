import Joi from "@hapi/joi";
import User from "../../models/user";


export const register = async (ctx) => {
  console.log('회원가입중')

  const user_email = ctx.request.body.user_email;
  const user_pw = ctx.request.body.user_pw;
  const user_gender= ctx.request.body.user_gender;
  const user_age = ctx.request.body.user_age;
  const user_nick = ctx.request.body.user_nick;
  const profile_pic = ctx.request.body.profile_pic;
  

  try {
    const exists = await User.findByUser_email(user_email);
    if (exists) {
      ctx.status = 409;
      return;
    }else{
      const user = new User({
        user_email: user_email,
        user_gender: user_gender,
        user_age: user_age,
        user_nick: user_nick,
        profile_pic: profile_pic,
      });
      await user.setUser_pw(user_pw);
      await user.save();
  
      ctx.body = user.serialize();
  
      const token = user.generateToken();
      ctx.cookies.set("access_token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async (ctx) => {
  const { user_id } = ctx.params;
  console.log(user_id);
  try{
      const post = await User.findById(user_id).exec();
      ctx.body = post.toJSON();
  }catch(e){
      ctx.throw(500, e);
  }
};


export const login = async (ctx) => {
  // 로그인
  const { user_email, user_pw} = ctx.request.body;

  if (!user_email || !user_pw) {
    ctx.status = 401;
    return;
  }
  try {
    const user = await User.findByUser_email(user_email);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkUser_pw(user_pw);
    if (!valid) {
      ctx.status = 401; //401 인증되지 않음
      return;
    }

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const findpw = async (ctx) => {
  // 비밀번호찾기
  const { user_email } = ctx.request.body;
  if (!user_email ) {
    ctx.status = 401;
    return;
  }
  try {
    const user = await User.findByUser_email(user_email);
    if (!user) {
      ctx.status = 401;
      return;
    }
  } catch (e) {
    ctx.throw(500, e);
  }
};

//비밀번호 수정
export const changePw = async ctx => { //특정필드만 수정
  const { user_email } = ctx.params;

  const schema = Joi.object().keys({
    user_pw: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if(result.error){
      ctx.status = 400;
      ctx.body = result.error;
      return;
  }
  try{
      const change = await User.findByIdAndUpdate(user_email, ctx.request.body,{new : true}).exec(); //new : true 업데이트된값을 리턴 false는 바뀌기전내용을 리턴
      if(!change){
          ctx.status = 404;
          return;
      }
      ctx.body = post;
  }catch(e){
      ctx.throw(500, e);
  }
}

export const check = async (ctx) => {
  console.log('로그인유저123', ctx.state);
  // 로그인 상태 확인
  // const { user } = ctx.state;
  const user = await User.findById(ctx.state.user._id);
  console.log(user)
  if (!user) {
    ctx.status = 401;
    return;
  }

  ctx.body = user.toJSON();
  user.login_time = Date.now();
};

export const logout = async (ctx) => {
  // 로그아웃
  ctx.cookies.set("access_token");
  ctx.status = 204;
};

//회원 탈퇴
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await user.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

//프로필수정
export const profileUpdate = async (ctx) => {
  const { id } = ctx.params;

  const schema = Joi.object().keys({
    join_date:Joi.date().default(Date.now()),
    brief_intro: Joi.string(),
    address: Joi.string(),
    school: Joi.string(),
    personality: Joi.string(),
    fav_song: Joi.string(),
    fav_movie: Joi.string(),
    fav_food: Joi.string(),
    login_time:Joi.date().default(Date.now()),
    premium: Joi.string().default('no_sub'),
    stopAccount: Joi.string().default('false'),
    match_gender:  Joi.string().default('both')
  });
 
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const nextData = { ...ctx.request.body };
  try{
    const user = await User.findByIdAndUpdate(id, nextData,{new: true}).exec(); //new : true 업데이트된값을 리턴 false는 바뀌기전내용을 리턴
    if(!user){
        ctx.status = 404;
        return;
    }
    ctx.body = user;
}catch(e){
    ctx.throw(500, e);
}
}
//사진 추가

//sns 회원가입
export const snsRegister = async (ctx) => {
  const { id } = ctx.params;
  

  const schema = Joi.object().keys({
    user_gender: Joi.string(),
    user_age:Joi.number(),
    user_nick: Joi.string(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  // const profile_pic = ctx.req.files[0].filename;
  const nextData = { ...ctx.request.body };
  try{
    const user = await User.findByIdAndUpdate(id,nextData,{new: true}).exec(); //new : true 업데이트된값을 리턴 false는 바뀌기전내용을 리턴
    // const user2 = await User.findByIdAndUpdate(id,profile_pic,{new: true}).exec();
    if(!user){
        ctx.status = 404;
        return;
    }
    
    ctx.body = user;

}catch(e){
    ctx.throw(500, e);
}
}



