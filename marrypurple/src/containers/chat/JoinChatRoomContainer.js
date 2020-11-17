import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getMsgFrom, unloadMsg } from '../../modules/getMsg'
import Chat from '../../components/chat/Chat'

const JoinChatRoomContainer = ({ profile_pic, user_nick, user_email, my_email }) => {
    const { getMsg, error, loading } = useSelector(({ getMsg, loading }) => ({
        getMsg: getMsg.getMsg,
        error: getMsg.error,
        loading: loading['chat/Get_MSG']
    }));

    console.log('메세지',getMsg)
    //  내정보와 상대의 정보를 보내서 불러온다.

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect가 실행되고 있는지를 체크할 console@@@@@@@@',my_email,user_email)
        dispatch(getMsgFrom({sender: my_email, recepient:user_email}));
        return () => {
            dispatch(unloadMsg());
        };
    }, [dispatch]);

    return(
        <>
            <Chat profile_pic={profile_pic} user_nick={user_nick} user_email={user_email} my_email={my_email} getMsg={getMsg} />
        </>
    )
}

export default JoinChatRoomContainer;