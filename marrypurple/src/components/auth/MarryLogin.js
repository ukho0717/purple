import React from 'react';
import { Link } from 'react-router-dom';
import '../../lib/styles/marrylogin.scss'
import LoginH from '../../lib/img/LoginH.png';
import io from 'socket.io-client'

const socket = io.connect('/')
const MarryLogin = ({type, form, onChange, onSubmit, error }) => {
    console.log(form)
    
    const Onclick = () => {
        let output = {id:form.user_email};
        console.log('서버로 보낼 데이터 : ' + JSON.stringify(output));
        
        if(socket == undefined){
            alert('서버에 연결되어 있지 않습니다. 먼저 서버에 연결하세요.');
            return;
        }
        socket.emit('login', output);
    }
    return(
        <div id="loginWrap">
        <div id="MLcontainer">
            <div id="MLheader">
                <div className="MLlogo">
                    <p><a><Link to="/"><img src={LoginH}/></Link></a></p>
                </div>
            </div>
            <div className="HeadT">
                <h1>로그인</h1>
            </div>
            
        <form onSubmit={onSubmit}>
            <div className="MLid">
                <input  
                    type="text" 
                    name="user_email" 
                    placeholder="아이디" 
                    onChange={onChange}
                    value={form.user_email} 
                />
            </div>
            <div className="MLid">
                <input 

                    type="password" 
                    name="user_pw" 
                    placeholder="비밀번호"   
                    onChange={onChange}
                    value={form.user_pw}
                />
            </div>
            <div className="loginQ">
                <p><a><Link to="/register">로그인 하실 수 없으신가요??</Link></a></p>
            </div>
            <div className="loginQ pwQ">
                <p><a><Link to="/findPw">비밀번호를 잊으셨나요??</Link></a></p>
            </div>
            <div id="MLlogin">
                <button className="loginBtn"><span>로그인</span></button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default MarryLogin;