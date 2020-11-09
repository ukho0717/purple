import React from 'react';
import GramWrite from '../../components/enter_gram/GramWrite';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { badListPosts } from '../../modules/badList';

const GramWriteContainer = () => {
    
    return (
        <GramWrite />
    )
}

export default withRouter(GramWriteContainer);