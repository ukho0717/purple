import React,{useEffect} from 'react';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SideMenu from '../../components/common/SideMenu';
import { chatUser, unloadChatUser } from '../../modules/chat'

const SideMenuContainer = ({ match }) => {
    const dispatch = useDispatch();
    const { chat, error, loading, currentPage, user } = useSelector(({ chat, loading, user }) => ({
        chat: chat.chat,
        currentPage: match.path,
        user: user.user,
        error: chat.error,
        loading: loading['chat/CHAT_LIST']
    }));

    const userPic = user.profile_pic;

    useEffect(() => {
        dispatch(chatUser());
        return () => {
            dispatch(unloadChatUser());
        };
    }, [dispatch]);

    const boyClick = () => {
        alert('boy');
    }
    const allClick = () => {
        alert('all');
    }
    const girlClick = () => {
        alert('girl');
    }
    
    return <SideMenu currentPage={currentPage} chat={chat} loading={loading} user={user} userPic={userPic} boyClick={boyClick} allClick={allClick} girlClick={girlClick}/>;

}

export default withRouter(SideMenuContainer);