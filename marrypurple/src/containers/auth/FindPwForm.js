import React, {useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import FindPw from '../../components/auth/find_pw';
import { changeField,initializeForm,findpw} from "../../modules/findpw";
import {withRouter} from "react-router-dom";
import {check} from "../../modules/user";

const FindPwForm = ({history}) =>{
    const [error,setError]= useState(null);
    const dispatch = useDispatch();
    const {form,auth,authError,user} = useSelector(({auth,user})=>({
        form:auth.findpw,
        auth:auth.auth,
        authError:auth.authError,
        user: user.user,
    }));

    const onChange = (event) => {
        const { value, name } = event.target;
        dispatch(
            changeField({
            form: "findpw",
            key: name,
            value,
            }),
        );
    };
    const onSubmit = (event) => {
        console.log("비밀번호찾기");
        event.preventDefault();
        const { user_email } = form;
        dispatch(findpw({ user_email }));
    };
    useEffect(() => {
        dispatch(initializeForm("findpw"));
    }, [dispatch]);
    useEffect(() => {
        if (authError) {
        console.log("Error!");
        console.log(authError);
        setError("일치하는 아이디 없습니다. :(");
        return;
        }
        if (auth) {
            console.log("비밀번호변경 창으로이동");
            dispatch(check());
        }
        }, [authError, auth, dispatch]);
        useEffect(() => {
            if (user) {
        history.push("/changePw");
            try {
                localStorage.setItem("user", JSON.stringify(user));
            } catch (e) {
                console.log("localStorage error!");
            }
            }
        }, [user, history]);
        return(
            <FindPw
                type="findpw"
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
                error={error}

            />
        );
};

export default withRouter(FindPwForm);