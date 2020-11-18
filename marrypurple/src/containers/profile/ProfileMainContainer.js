import React from 'react';
import ProfileMain from '../../components/profile/ProfileMain';
import { withRouter } from 'react-router-dom';

const ProfileMainContainer = () => {
    return (
        <ProfileMain/>
    )
}

export default withRouter(ProfileMainContainer);