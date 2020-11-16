import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import '../../lib/styles/chat.scss'
import $ from 'jquery';

const socket = io.connect('/')

const ChatContainer = ({getChat, loading, user}) => {
    let user_nick ='';
    let profile_pic ='';
    let user_email = '';
    if(getChat){
        user_nick = getChat.user_nick
        profile_pic = getChat.profile_pic
        user_email = getChat.user_email
    }
    const [yourID, setYourID] = useState()
    const [state, setState] = useState({message: '', name: ''});
    const [chat, setChat] = useState([])
    const [preload, setPreload] = useState([])
    useEffect(()=>{
        socket.on('yourId',id =>{
            setYourID(id)
        })
        socket.on('message', (data) => {
            setChat([...chat, data])
        })
        socket.on('preloadup',(data)=>{
            setPreload([...preload,data])
            console.log('뭐없니ㅣㅣㅣㅣㅣㅣㅣㅣㅣ',data)
            // var output = '';
            // output = `</br><div class="message_2_me"><div class="message_2_me_text">${data.message}</div></div></br>`;
            // $('#msgBoard').append(output);

        });
    },[chat,preload])

    const onTextChange = (e) =>{
        setState({...state, [e.target.name]:e.target.value})
    }

    const onMessageSubmit = (e) => {
        e.preventDefault()//계속 새로고침하는것을 막아주는 함수.
        const {name, message} = state
        const output = {
            id: yourID,
            sender: user.user_email,
            recepient: user_email,
            data: message
        }
        socket.emit('sendMessage', output)
        // console.log('메세지 보냈습니다.')
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
                    {/* <p>2020.10.07</p> */}
                    {preload.map(({data, sender}, index)=>{
                        if(sender === user_email){
                            return(
                                <div key={index} class="message_2_me">
                                    <div class="message_2_me_text"><div>뭐없니{data.message}</div></div>
                                    
                                </div>
                            )
                        }
                        return(
                                <div class="message_2_you">
                                <img id="send_msg_pic" src={profile_pic}/>
                                <div class="message_2_you_text">{data.message}</div></div>
                            )
                    })}
                    {chat.map(({data, id}, index)=>{
                        if(id === yourID){
                            return(
                                <div key={index} class="message_2_me">
                                    <div class="message_2_me_text"><div>{data}</div></div>
                                    
                                </div>
                            )
                        }
                        return(
                                <div class="message_2_you">
                                <img id="send_msg_pic" src={profile_pic}/>
                                <div class="message_2_you_text">{data}</div></div>
                            )
                    })}
                    
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
