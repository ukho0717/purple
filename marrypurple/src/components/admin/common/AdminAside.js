import React from 'react';
import '../../../lib/styles/admin/adminstyle.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AdminAside = () => {
    return (
        <>
            <adminaside>
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu" id="nav-accordion">
                        <h5 className="centered">admin</h5>
                        <li className="mt">
                            <Link className="active" to="/Admin_main">
                            <i className="fa fa-dashboard"></i>
                            <span>main</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="/admin_users">
                            <i className="fa fa-desktop"></i>
                            <span>회원</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="/admin_gram">
                            <i className="fa fa-cogs"></i>
                            <span>메리퍼플그램</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="/admin_badList">
                            <i className="fa fa-book"></i>
                            <span>불량회원</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="adimn_notice">
                            <i className="fa fa-tasks"></i>
                            <span>공지사항</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </adminaside>
        </>
    )
}

export default AdminAside;