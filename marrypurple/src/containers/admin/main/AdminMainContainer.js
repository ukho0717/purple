import React, { useEffect } from 'react';
import AdminMain from '../../../components/admin/main/AdminMain';
import { withRouter } from 'react-router-dom';

const AdminMainContainer = () => {
    return (
        <AdminMain />
    )
}

export default withRouter(AdminMainContainer);
