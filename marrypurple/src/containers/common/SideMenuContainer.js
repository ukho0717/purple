import React,{useEffect} from 'react';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SideMenu from '../../components/common/SideMenu';
import { chatUser, unloadChatUser } from '../../modules/chat'
import { updateGender } from '../../modules/side'

const SideMenuContainer = ({ match }) => {
    const dispatch = useDispatch();
    const { chat, error, loading, currentPage, user } = useSelector(({ chat, loading, user }) => ({
        chat: chat.chat,
        currentPage: match.path,
        user: user.user,
        error: chat.error,
        loading: loading['chat/CHAT_LIST']
    }));

    let userPic = []
    if(user){
        userPic = user.profile_pic;
}

    useEffect(() => {
        dispatch(chatUser());
        return () => {
            dispatch(unloadChatUser());
        };
    }, [dispatch]);

    const boyClick = () => {
        dispatch(updateGender({
            match_gender: 'male'
        }))
    }
    const allClick = () => {
        dispatch(updateGender({
            match_gender: 'both'
        }))
    }
    const girlClick = () => {
        dispatch(updateGender({
            match_gender: 'female'
        }))
    }
    
    return <SideMenu currentPage={currentPage} chat={chat} loading={loading} user={user} userPic={userPic} boyClick={boyClick} allClick={allClick} girlClick={girlClick}/>;

}

export default withRouter(SideMenuContainer);