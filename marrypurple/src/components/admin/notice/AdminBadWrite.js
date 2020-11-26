import React from 'react';
import '../../../lib/styles/admin/adminBad.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
import { MDBDataTable } from 'mdbreact';

const AdminBadWrite = () => {
    return (
        <>
            <h3><i className="fa fa-angle-right"></i> 불량회원</h3>
            <form method="post">
                <div>user_id</div>
                <div>이유</div>
                <div>등록 / 취소</div>
            </form>
        </>
    )
}

export default AdminBadWrite;
