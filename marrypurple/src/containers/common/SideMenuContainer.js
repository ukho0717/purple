import React from 'react';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideMenu from '../../components/common/SideMenu';
import Side from '../../components/common/Side';

const SideMenuContainer = ({ chat, match }) => {
    // console.log('!!!!', chat);
    // const dispatch = useDispatch();
    const { currentPage, user } = useSelector(({ user }) => ({ 
        currentPage: match.path,
        user: user.user
    }));

    return <SideMenu currentPage={currentPage} chat={chat} user={user}/>;

}

export default withRouter(SideMenuContainer);