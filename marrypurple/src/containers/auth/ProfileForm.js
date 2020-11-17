import React, { useEffect } from 'react';
import Profile from '../../components/auth/Profile';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readProfile, unloadProfile,updateProfile } from '../../modules/profile';


const ProfileForm = ({match})=>{
    // const {user_id} = match.params;
    const dispatch = useDispatch();
    const{user,error,loading} =useSelector(
        ({loading,user})=>({
            user: user.user,
            loading: loading['profile/READ_PROFILE']
        })  
    );
    useEffect(() => {
        dispatch(readProfile());
        return () => {
            dispatch(unloadProfile());
        }
    }, [dispatch]);
    return(
        <Profile user={user}  error={error} loading={loading}/>

    )
}
export default withRouter(ProfileForm);

