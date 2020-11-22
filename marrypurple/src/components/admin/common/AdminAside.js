import React, { Component } from 'react';
import '../../../lib/styles/admin/adminstyle.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import $ from 'jquery';

export function script() {
    

    if ($('#sidebar > ul').is(":visible") === true) {
        $('#main-content').css({
            'margin-left': '0px'
        });
        $('#sidebar').css({
            'margin-left': '-210px'
        });
        $('#sidebar > ul').hide();
    } else {
        $('#main-content').css({
            'margin-left': '210px'
        });
        $('#sidebar > ul').show();
        $('#sidebar').css({
            'margin-left': '0'
        });
    }
}

const AdminAside = () => {
    // let nowPage = '';
    // if(currentPage){
    //     nowPage = currentPage;
    // }
    // console.log('currentPage',nowPage);
    // switch(currentPage){
    //     case '/Admin_main':
    //         $('.sidebar-menu').children('li').first().children('a').addClass('active');
    //         break;
    //     case '/Admin_users':
    //         $('.sidebar-menu').children('li:nth-child(3)').children('a').addClass('active');
    //         break;
    //     case '/Admin_gram':
    //         $('.sidebar-menu').children('li:nth-child(4)').children('a').addClass('active');
    //         break;
    //     case '/Admin_badList':
    //         $('.sidebar-menu').children('li:nth-child(5)').children('a').addClass('active');
    //         break;
    //     case '/Adimn_notice':
    //         $('.sidebar-menu').children('li:nth-child(6)').children('a').addClass('active');
    //         break;
    //     default:
            
    // }

    // let media = window.matchMedia('( max-width: 768px )');
    // if(media.matches === true){
    //     $('#main-content').css({
    //         'margin-left': '0px'
    //     });
    //     $('#sidebar').css({
    //         'margin-left': '-210px'
    //     });
    //     $('#sidebar > ul').hide();
    // }

    return (
        <>
            <adminaside>
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu" id="nav-accordion">
                        <h5 className="centered">admin</h5>
                        <li className="mt">
                            <Link /*className="active"*/ to="/Admin_main">
                            <i className="fa fa-dashboard"></i>
                            <span>main</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="/Admin_users">
                            <i className="fa fa-desktop"></i>
                            <span>회원</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="/Admin_gram">
                            <i className="fa fa-cogs"></i>
                            <span>메리퍼플그램</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="/Admin_badList">
                            <i className="fa fa-book"></i>
                            <span>불량회원</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="Adimn_notice">
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