import React from 'react';
import { Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../../lib/styles/regist.scss';
import rLogo from '../../lib/img/rLogo.png';

const FindPw = ({type,form,onChange,onSubmit,error}) => {
    const mailClick =()=>{
        document.cookie = "user={form.user_email}; max-age=3600"
    }
    return(
    <Router>
        <div id="wrapM">
        <div id="container">
            <div id="Rheader">
                    <a><Link to="/" class="rLogo"><img src={rLogo} alt="회원가입로고"/></Link></a>
            </div>
            <div class="rContainer">
                <div class="regiT findPw">
                    <h1>비밀번호 찾기</h1>
                </div>
            <form onSubmit={onSubmit}>
                <div class="regiId">
                    <p><span class="idText">아이디</span></p>
                    <div>
                        <div class="inputId">
                            <input 
                                class="flexS" 
                                type="text" 
                                name="user_email"
                                placeholder="이메일 주소(아이디)"
                                onChange={onChange}
                                value={form.user_email}
                            />
                        </div>
                        <Link to="/mailOk"><input class="getE" type="button" name="idCheck"  value="인증 받기"/>                            
                        <input  
                                class="flexS" 
                                type="hidden" 
                                name="user_email"
                                placeholder="이메일 주소(아이디)"
                                onChange={onChange}
                                value={form.user_email}
                            /></Link>
                    </div>
                </div> 
                <div class="regiId">
                    <div class="inputId">
                        <input class="reNum" type="text" name="chkNum" placeholder="인증번호"/>
                    </div>
                    <input class="getE" type="button" name="Check" onClick={mailClick} value="인증"/>
                </div>
                <div className="errorMsg1">{error}</div>
                <div class="reBtn">
                    <a><input class="rePw" type="submit" name="rePw1" value="변경하기"/></a>
                </div>
            </form>
            </div>
        </div>
    </div>
    </Router>

    )
}
export default FindPw;