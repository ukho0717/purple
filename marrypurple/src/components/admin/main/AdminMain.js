import React from 'react';
// import '../../../lib/styles/admin/adminstyle.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AdminMain = () => {
    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
            </Helmet>
            <h2>메인입니다</h2>
        </>
    )
}

export default AdminMain;