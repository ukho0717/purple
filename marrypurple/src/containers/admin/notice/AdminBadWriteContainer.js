import React, { useEffect } from 'react';
import AdminBadWrite from '../../../components/admin/notice/AdminBadWrite';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { badListPosts } from '../../../modules/badList';
import qs from 'qs';

const AdminBadWriteContainer = () => {
    
    return (
        <AdminBadWrite/>
    )
}

export default withRouter(AdminBadWriteContainer);