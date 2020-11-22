import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {adminUserList, adminUserUnloadList, nickList, emailList, genderList} from '../../../modules/admin'
import AdminUser from '../../../components/admin/user/AdminUser'

const AdminUserContainer = () => {
    const dispatch = useDispatch();
    const { user, error, loading, nick,email,gender } = useSelector(({ admin, loading }) => ({
        user: admin.user,
        error: admin.error,
        nick: admin.nick,
        email: admin.email,
        gender: admin.gender,
        loading: loading['admin/USER_LIST']
    }));
    useEffect(() => {
        dispatch(adminUserList());
        return () => {
            dispatch(adminUserUnloadList());
        };
    }, [dispatch]);
    // console.log(user)
    let userList = []
    if(user){
        userList = user
    }
    const [selectVal, setSelectVal] = useState('');
    const [input, setInput]=useState()

    const onClick = (selectVal, text) => {
        if(selectVal === 'nick'){
            dispatch(nickList({'text': text }))
        }else if(selectVal === 'email'){
            dispatch(emailList({'text': text}))
        }else{
            dispatch(genderList({'text': text}))
        }
    }
    const onChange = (e) => {
        setInput(e.target.value)
    }

    const handleChange = (e) => {
        setSelectVal(e.target.value)
    }

    console.log('nick은 무엇', nick)

    return(
        <AdminUser 
            userList={userList} 
            onClick={onClick} 
            onChange={onChange} 
            handleChange={handleChange} 
            selectVal= {selectVal}
            input={input}
            nick={nick}
            email={email}
            gender={gender}
        />
    )
}

export default AdminUserContainer;