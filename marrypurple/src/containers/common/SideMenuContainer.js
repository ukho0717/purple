import React from 'react';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideMenu from '../../components/common/SideMenu';
import Side from '../../components/common/Side';

const SideMenuContainer = ({ location, chat }) => {
    console.log('!!!!', chat);
    // const dispatch = useDispatch();
    const { currentPage } = useSelector(() => ({ currentPage: location.pathname }));

    return <SideMenu currentPage={currentPage} chat={chat}/>;

}

export default withRouter(SideMenuContainer);