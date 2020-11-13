import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import '../../lib/styles/chat.scss'

const socket = io.connect('/')

const ChatContainer = ({user, loading}) => {
    console.log('채팅 유저유저유저유저 ', user)

    const [state, setState] = useState({message: '', name:'김사과'});
    const [chat, setChat] = useState([])

    useEffect(()=>{
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
        socket.emit('message',{name, message})
        console.log('메세지 보냈습니다.')
        setState({message:'', name})
    }

    return(
        <div>
            <div class="message_1">
                    <a href="message_profile.html"><div id="message_1_photo"><div></div></div>
        <p><span id="message_1_id"></span>님과 <span id="message_1_date">2020.9.8</span>에 매치되었습니다.</p></a>
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