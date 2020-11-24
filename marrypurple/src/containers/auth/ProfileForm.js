// import React, { useEffect,useState } from 'react';
// import Profile from '../../components/auth/Profile';
// import { withRouter } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { readProfile, unloadProfile,updateProfile } from '../../modules/profile';
// import $ from 'jquery';
// import { check } from "../../modules/user";

// const ProfileForm = ({match,history})=>{
//     const {user_id} = match.params;
//     const dispatch = useDispatch();

//     const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
//         form: auth.updateProfile,
//         auth: auth.auth,
//         authError: auth.authError,
//         user: user.user,
//       }));
//     useEffect(() => {
//         dispatch(readProfile());
//         return () => {
//             dispatch(unloadProfile());
//         }
//     }, [dispatch]);

    
//   const onChange = (event) => {
//     const {  value,name } = event.target;
//     dispatch(
//       changeField({
//         form: "updateProfile",
//         key: name,
//         value,
//       }),
//     );
//   };

//     const profileUpdate = e =>{
//         let brief_intro = e.target.brief_intro.value;
//         let address = e.target.address.value;
//         let school = e.target.school.value;
//         let personality = e.target.personality.value;
//         let fav_song = e.target.fav_song.value;
//         let fav_movie = e.target.fav_movie.value;
//         let fav_food = e.target.fav_food.value;
//         let profile_pic = e.target.profile_pic.value;

//         e.preventDefault();

//         dispatch(updateProfile({
//             _id:user_id,
//             brief_intro,
//             address,
//             school,
//             personality,
//             fav_song,
//             fav_movie,
//             fav_food,
//             profile_pic
//         }));
//         dispatch(readProfile(user_id));
//         return () => {
//             dispatch(unloadProfile());
//         } 
//     }
//     useEffect(() => {
//         dispatch(readProfile(user_id));
//         return () => {
//             dispatch(unloadProfile());
//         }
//     }, [dispatch, user_id]);
//     useEffect(()=>{
//         if (auth) {
//         console.log("수정성공");
//         console.log(auth);
//         dispatch(check());
//         return;
//         }
//     }, [auth])
//     useEffect(() => {
//     if (user) {
//     history.push("/profile");
//     try {
//         localStorage.setItem("user", JSON.stringify(user));
//     } catch (e) {
//         console.log("localStorage error!");
//     }
//     }
//     }, [user, history]);
    
//     return(
//         <Profile type="updateProfile"  form={form} onChange={onChange} profileUpdate={profileUpdate} />

//     )
// }
// export default withRouter(ProfileForm);

