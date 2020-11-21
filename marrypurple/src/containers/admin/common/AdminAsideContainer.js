import React, { useEffect } from 'react';
import AdminAside from '../../../components/admin/common/AdminAside';
import { withRouter } from 'react-router-dom';

const AdminAsideContainer = () => {
    return (
        <AdminAside />
    )
}

export default withRouter(AdminAsideContainer);
