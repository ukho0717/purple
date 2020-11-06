import React from 'react';
import { Link } from 'react-router-dom';
import '../../lib/styles/marrylogin.scss'
import LoginH from '../../lib/img/LoginH.png';

const MarryLogin = () => {
    return(
        <div id="loginWrap">
        <div id="MLcontainer">
            <div id="MLheader">
                <div class="MLlogo">
                    <p><a><Link to="/"><img src={LoginH}/></Link></a></p>
                </div>
            </div>
            <div class="HeadT">
                <h1>로그인</h1>
            </div>
            
        <form action="/login" method="post">
            <div class="MLid">
                <input type="text" name="userId" placeholder="아이디"/>
            </div>
            <div class="MLid">
                <input type="password" name="userPw" placeholder="비밀번호"/>
            </div>
            <div class="loginQ">
                <p><a><Link to="/regist">로그인 하실 수 없으신가요??</Link></a></p>
            </div>
            <div class="loginQ pwQ">
                <p><a><Link to="/findPw">비밀번호를 잊으셨나요??</Link></a></p>
            </div>
            <div id="MLlogin">
                <button type="submit" class="loginBtn"><span>로그인</span></button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default MarryLogin;