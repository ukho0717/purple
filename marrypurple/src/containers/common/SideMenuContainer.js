import React from 'react';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideMenu from '../../components/common/SideMenu';


const SideMenuContainer = ({ location }) => {
    // console.log('!!!!', location);
    // const dispatch = useDispatch();
    const { currentPage } = useSelector(() => ({ currentPage: location.pathname }));

    return <SideMenu currentPage={currentPage}/>;
}

export default withRouter(SideMenuContainer);