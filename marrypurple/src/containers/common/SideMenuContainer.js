import React,{useEffect} from 'react';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SideMenu from '../../components/common/SideMenu';
import { chatUser, unloadChatUser } from '../../modules/chat'

const SideMenuContainer = ({ match }) => {
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
    // console.log('매칭된 chatUser 불러오는 중.... ', chat)
    const currentPage = match.url
    return <SideMenu currentPage={currentPage}  chat={chat} loading={loading}/>;

}

export default withRouter(SideMenuContainer);