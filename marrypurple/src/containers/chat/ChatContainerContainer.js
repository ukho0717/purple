import React, {useEffect} from 'react';
import ChatContainer from './ChatContainer'
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getChatUser, unloadCUser } from '../../modules/getChtUser'

const ChatContainerContainer = ({match}) => {
    const chatId = match.params;
    const dispatch = useDispatch();
    const { getChat, error, loading } = useSelector(({ getChat, loading }) => ({
        getChat: getChat.getChat,
        error: getChat.error,
        loading: loading['chat/CHAT_USER']
    }));
    useEffect(() => {
        dispatch(getChatUser(chatId));
        return () => {
            dispatch(unloadCUser());
        };
    }, [dispatch, chatId]);
    // console.log('매칭된 chatUser 불러오는 중.... ', chat)
    return(
        <ChatContainer
            user={getChat}
            loading = {loading}
        />
    )
}

export default withRouter(ChatContainerContainer)