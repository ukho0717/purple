import React from 'react';
import ProfileMain from '../../components/profile/ProfileMain';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateGender } from '../../modules/side'

const ProfileMainContainer = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(({ user }) => ({
        user: user.user
    }));

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

    return (
        <ProfileMain user={user} boyClick={boyClick} allClick={allClick} girlClick={girlClick}/>
    )
}

export default withRouter(ProfileMainContainer);