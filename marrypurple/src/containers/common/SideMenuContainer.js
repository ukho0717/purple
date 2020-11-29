import React,{useEffect} from 'react';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SideMenu from '../../components/common/SideMenu';
import { chatUser, unloadChatUser } from '../../modules/chat'
import { logout} from '../../modules/user'
<<<<<<< HEAD
=======
import { updateGender } from '../../modules/side'
>>>>>>> 5b5aded944295ec6a9bf489a99ea9463f95c0b69

const SideMenuContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { chat, error, loading, currentPage, user } = useSelector(({ chat, loading, user }) => ({
        chat: chat.chat,
        currentPage: match.path,
        user: user.user,
        error: chat.error,
        loading: loading['chat/CHAT_LIST']
    }));

    if(!user){
        history.push('/');
    }

<<<<<<< HEAD
=======
    // let userPic = []
    // if(user){
    //     userPic = user.profile_pic;
    // }
    const userPic = user.profile_pic;
>>>>>>> 5b5aded944295ec6a9bf489a99ea9463f95c0b69

    useEffect(() => {
        dispatch(chatUser());
    }, [dispatch]);
<<<<<<< HEAD
    // console.log('매칭된 chatUser 불러오는 중.... ', chat)
=======

>>>>>>> 5b5aded944295ec6a9bf489a99ea9463f95c0b69
    const onLogout = () => {
        dispatch(logout());
        history.push('/')
    };
<<<<<<< HEAD
    return <SideMenu currentPage={currentPage} chat={chat} loading={loading} user={user} userPic={userPic} onLogout={onLogout}/>;

=======
    
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
    
    return <SideMenu currentPage={currentPage} chat={chat} loading={loading} user={user} userPic={userPic} boyClick={boyClick} allClick={allClick} girlClick={girlClick} onLogout={onLogout}/>;
>>>>>>> 5b5aded944295ec6a9bf489a99ea9463f95c0b69
}

export default withRouter(SideMenuContainer);