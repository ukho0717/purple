import React, { useEffect,useState } from 'react';
import Profile from '../../components/auth/Profile';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField,readProfile, unloadProfile,updateProfile } from '../../modules/auth';
import axios from 'axios';


const ProfileForm = ({match,history})=>{
    const [error, setError] = useState(null);
    // const {user_id} = match.params;
    const dispatch = useDispatch();
    
    const { form, auth, authError, user ,loading} = useSelector(({ auth, user,loading }) => ({
      form: auth.updateProfile,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
      loading: loading['auth/PROFIEL_UPDATE']
    }));
    useEffect(() => {
          dispatch(readProfile());
          return () => {
                dispatch(unloadProfile());
            }
      }, [dispatch]);

    
    
    
  const onChange = (event) => {
    const {  value,name } = event.target;
    dispatch(
      changeField({
        form: "updateProfile",
        key: name,
        value,
      }),
    );
  };

    const profileSubmit = e =>{
        let brief_intro = e.target.brief_intro.value;
        let address = e.target.address.value;
        let school = e.target.school.value;
        let personality = [e.target.personality.value];
        let fav_song = e.target.fav_song.value;
        let fav_movie = e.target.fav_movie.value;
        let fav_food = e.target.fav_food.value;
        let profile_pic = (e.target.profile_array.value).split(',');
        alert("수정되었습니다")
        e.preventDefault();

        dispatch(updateProfile({
            // _id:user_id,
            brief_intro:brief_intro,
            address:address,
            school:school,
            personality: personality,
            fav_song:fav_song,
            fav_movie:fav_movie,
            fav_food:fav_food,
            profile_pic:profile_pic
        }));
  }
    useEffect(() => {
        dispatch(readProfile());
        return () => {
            dispatch(unloadProfile());
            history.push('/profile')
        }
    }, [dispatch]);
    // useEffect(()=>{
    //     if (auth) {
    //     console.log("수정성공");
    //     console.log(auth);
    //     dispatch(check());
    //     return;
    //     }
    // }, [auth])
    // useEffect(() => {
    // if (user) {
    // try {
    //     localStorage.setItem("user", JSON.stringify(user));
    // } catch (e) {
    //     console.log("localStorage error!");
    // }
    // }
    // }, [user, history]);
    
    return(
        <Profile type="updateProfile"  user={user} form={form} onChange={onChange} profileSubmit={profileSubmit} loading={loading} error={authError} profile={user.profile_pic} personal={user.personality}/>
    )
}
  export default withRouter(ProfileForm);