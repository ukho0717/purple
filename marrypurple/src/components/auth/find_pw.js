import React from 'react';
import { Link } from 'react-router-dom';
import '../../lib/styles/regist.scss';
import rLogo from '../../lib/img/rLogo.png';

const FindPw = () => {
    return(
        <div id="wrapM">
        <div id="container">
            <div id="Rheader">
                    <a><Link to="/" class="rLogo"><img src={rLogo} alt="회원가입로고"/></Link></a>
            </div>
            <div class="rContainer">
                <div class="regiT findPw">
                    <h1>비밀번호 찾기</h1>
                </div>
            <form action="/findPw" method="post">
                <div class="regiId">
                    <p><span class="idText">아이디</span></p>
                    <div>
                        <div class="inputId">
                            <input  class="flexS" type="text" name="userId" placeholder="이메일 주소(아이디)"/>
                        </div>
                        <input class="getE" type="button" name="idCheck" value="인증 받기"/>
                    </div>
                </div> 
                <div class="regiId">
                    <div class="inputId">
                        <input class="reNum" type="text" name="chkNum" placeholder="인증번호"/>
                    </div>
                    <input class="getE" type="button" name="Check" value="인증"/>
                </div>
                <div class="reBtn">
                    <a><Link to="/changePw"><input class="rePw" type="button" name="rePw1" value="변경하기"/></Link></a>
                </div>
            </form>
            </div>
        </div>
    </div>
    )
}
export default FindPw;