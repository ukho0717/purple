import React, {useEffect} from 'react';
import ChatContainer from './ChatContainer'
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getChatUser, unloadCUser } from '../../modules/getChtUser'

const ChatContainerContainer = ({match}) => {
    const { id } = match.params;
    const dispatch = useDispatch();
    const { getChat, error, loading } = useSelector(({ getChat, loading }) => ({
        getChat: getChat.getChat,
        error: getChat.error,
        loading: loading['chat/CHAT_USER'],
    }));

    useEffect(() => {
        dispatch(getChatUser(id));
        return () => {
            dispatch(unloadCUser());
        };
    }, [dispatch, id]);

    const defaultState = {
        user: JSON.parse(localStorage.getItem('user'))
      };

    return(
        <ChatContainer
            loading={loading}
            user={defaultState.user}
            getChat={getChat}
        />
    )
}

export default withRouter(ChatContainerContainer)