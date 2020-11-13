import React, {useEffect} from 'react';
import ChatContainer from './ChatContainer'
import { useDispatch, useSelector } from 'react-redux';
import { chatUser, unloadChatUser } from '../../modules/chat'

const ChatContainerContainer = () => {
    const dispatch = useDispatch();
    const { chat, error, loading } = useSelector(({ chat, loading }) => ({
        chat: chat.chat,
        error: chat.error,
        loading: loading['chat/CHAT_LIST']
    }));
    useEffect(() => {
        dispatch(chatUser());
        return () => {
            dispatch(unloadChatUser());
        };
    }, [dispatch]);
    console.log('매칭된 chatUser 불러오는 중.... ', chat)
    return(
        <ChatContainer
            chat={chat}
        />
    )
}

export default ChatContainerContainer