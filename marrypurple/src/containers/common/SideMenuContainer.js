import React,{useEffect} from 'react';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SideMenu from '../../components/common/SideMenu';
import { chatUser, unloadChatUser } from '../../modules/chat'
<<<<<<< HEAD
import { logout} from '../../modules/user'
=======
import { updateGender } from '../../modules/side'
>>>>>>> da90950c02eb979db2b236feadbcb0ba2d605a24

const SideMenuContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { chat, error, loading, currentPage, user } = useSelector(({ chat, loading, user }) => ({
        chat: chat.chat,
        currentPage: match.path,
        user: user.user,
        error: chat.error,
        loading: loading['chat/CHAT_LIST']
    }));

<<<<<<< HEAD
    if(!user){
        history.push('/');
    }
    const userPic = user.profile_pic;
    console.log(userPic)

=======
    let userPic = []
    if(user){
        userPic = user.profile_pic;
}
>>>>>>> da90950c02eb979db2b236feadbcb0ba2d605a24

    useEffect(() => {
        dispatch(chatUser());
    }, [dispatch]);
<<<<<<< HEAD
    // console.log('매칭된 chatUser 불러오는 중.... ', chat)
    const onLogout = () => {
        dispatch(logout());
        history.push('/')
    };
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
    
    return <SideMenu currentPage={currentPage} chat={chat} loading={loading} user={user} userPic={userPic} boyClick={boyClick} allClick={allClick} girlClick={girlClick}/>;
>>>>>>> da90950c02eb979db2b236feadbcb0ba2d605a24

}

export default withRouter(SideMenuContainer);