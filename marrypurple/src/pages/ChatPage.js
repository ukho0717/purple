import React,{useEffect} from 'react';
import ChatContainerContainer from '../containers/chat/ChatContainerContainer'
import ContentContainer from '../containers/common/ContentContainer';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import { useDispatch, useSelector } from 'react-redux';
import { chatUser, unloadChatUser } from '../modules/chat'

const ChatPage = () => {
    // const dispatch = useDispatch();
    // const { chat, error, loading } = useSelector(({ chat, loading }) => ({
    //     chat: chat.chat,
    //     error: chat.error,
    //     loading: loading['chat/CHAT_LIST']
    // }));
    // useEffect(() => {
    //     dispatch(chatUser());
    //     return () => {
    //         dispatch(unloadChatUser());
    //     };
    // }, [dispatch]);
    // // console.log('매칭된 chatUser 불러오는 중.... ', chat)

    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <ChatContainerContainer/>
            </ContentContainer>
        </div>
    )
}

export default ChatPage