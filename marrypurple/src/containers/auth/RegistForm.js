import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import Register from "../../components/auth/regist";
import { check } from "../../modules/user";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import nodemailer from 'nodemailer';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const [profile_pic, setProfile_pic] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const fileSelectHandler = (event) =>{
    imgbbUploader(event.target.files[0]).then(resp => {
      
      console.log(resp.data.data.url);
      setProfile_pic(resp.data.data.url);
      const { value, name } = event.target;
      dispatch(
        changeField({
          url: resp.data.data.url,
          form: "register",
          key: name,
          value,
          
        }),
      );
        
    })
  }


const imgbbUploader = ( img ) => {
    let body = new FormData()
    body.set('key', 'a88534ba3406503cc7c607af2810b2d9')
    body.append('image', img)

    return axios({
        url: 'https://api.imgbb.com/1/upload',
        method: 'post',
        timeout: 0,
        processData: false,
        mimeType: "multipart/form-data",
        contentType: false,
        data: body
    })
}

console.log('profile_pic',profile_pic);

  const onChange = (event) => {
    const { value,name } = event.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      }),
    );
  };

  //회원가입 등록 이벤트 핸들러
  const onSubmit = async (event) => {
    console.log("회원가입시도")
    event.preventDefault();

    console.log(event.target.idCheck.value);

    if(event.target.idCheck.value !=="인증 받기"){
      alert("인증받기")
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
          user: 'a01051817748@gmail.com',
          pass: '!@as2830'
        },
        host: 'smtp.gmail.com',
        port: '465'
      });
    
      let mailOptions = {
        from: "메리퍼플 <marry@gmail.com>",
        to: "ukho0711@naver.com",
        subject: "메리퍼플 인증메일입니다",
        text: "5555"
      };
    
      await transporter.sendMail(mailOptions, (err, info) => {
        transporter.close();
        if(err){
          console.log(err);
        }else{
          
          console.log("메일이 정상적으로 발송되었습니다.");
        }
      })
    }
    
    const { user_email, user_pw, user_gender,user_age,user_nick} = form;
    if ([user_email, user_pw, user_gender,user_age,user_nick].includes("")) {
      setError("빈 칸을 모두 입력하세요");
      return;
    }
    // if 이메일인증 여기다가 넣기!

    dispatch(register({ user_email, user_pw, user_gender,user_age,user_nick,profile_pic}));
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        alert("이미 존재하는 회원입니다")
        return;
      }
      console.log(`error!`);
      console.log(authError);
      setError("회원가입 실패");
      return;
    }
  }, [ authError, dispatch, error]);
  useEffect(()=>{
    if (auth) {
      console.log("성공");
      console.log(auth);
      dispatch(check());
      return;
    }
  }, [auth])
  useEffect(() => {
    if (user) {
      console.log(`check API success`);
      console.log(user);
      history.push("/");
      try {
        localStorage.getItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage error");
      }
    }
  }, [user, history]);
  return (
    <Register
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      fileSelectHandler={fileSelectHandler}
      error={error}
    />
  );
};



export default withRouter(RegisterForm);
