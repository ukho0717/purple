import React from 'react';
import GramMain from '../../components/enter_gram/GramMain';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { badListPosts } from '../../modules/badList';

const GramMainContainer = () => {
    
    return (
        <GramMain />
    )
}

export default withRouter(GramMainContainer);