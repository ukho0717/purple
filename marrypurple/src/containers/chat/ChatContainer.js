import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import '../../lib/styles/chat.scss'
import $ from 'jquery';

const socket = io.connect('/')

const ChatContainer = ({getChat, loading, user}) => {
    let user_nick ='';
    let profile_pic ='';
    let _id = '';
    if(getChat){
        user_nick = getChat.user_nick
        profile_pic = getChat.profile_pic
        _id = getChat._id
    }
// console.log(_id)
    const [state, setState] = useState({message: '', name: user_nick});
    const [chat, setChat] = useState([])

    
    useEffect(()=>{
        socket.on('preload',function(data){
            var output = '';
            output = `</br><div class="message_2_me"><div class="message_2_me_text">${data.message}</div></div></br>`;
            $('#msgBoard').append(output);
        });
        socket.on('message', ({name, message}) => {
            setChat([...chat, {name, message}])
        })
    },[chat])

    const renderChat = () => {
        return(
            chat.map(({name, message}, index) => (
                <div key={index}>
                    <div>{message}</div>
                </div>
            ))
        )
    }

    const onTextChange = (e) =>{
        setState({...state, [e.target.name]:e.target.value})
    }

    const onMessageSubmit = (e) => {
        e.preventDefault()//계속 새로고침하는것을 막아주는 함수.
        const {name, message} = state
        socket.emit('sendMessage',{name, message,_id})
        console.log('메세지 보냈습니다.')
        setState({message:'', name})
    }

    return(
        <div>
            <div class="message_1">
                    {/* <a href="message_profile.html"><div id="message_1_photo"><div style={{ background: `url(${profile_pic[0]})`, 'background-size': '100%', 'border-radius': '50%','backgroundPosition':"center" }}></div></div> */}
                    <a href="message_profile.html"><div id="message_1_photo"><img src={profile_pic[0]}/></div>
    <p><span id="message_1_id"></span>{user_nick}님과 매치되었습니다.</p></a>
                </div>
                <div class="message_2" id="msgBoard">
                    <p>2020.10.07</p>
                    <div class="message_2_you"><div class="message_2_you_photo"></div><div class="message_2_you_text">
                    </div></div>
                    {renderChat()}
                </div>
                <div class="message_3">
                    <div id="message_3_emoji"><div></div></div> 
                    <form onSubmit={onMessageSubmit}>
                        <input id="sendMsgBox"  
                            id="MsgInput"
                            name="message" 
                            onChange={e => onTextChange(e)} 
                            value={state.message} 
                            label="Message" 
                        /> 
                        <button>보내기</button></form>
                </div>
        </div>
    )
}


export default ChatContainer;