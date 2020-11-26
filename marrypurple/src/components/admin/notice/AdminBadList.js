import React from 'react';
import '../../../lib/styles/admin/adminBad.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
import { MDBDataTable } from 'mdbreact';

const AdminBadList = ({ badList }) => {
    let list = [];
    if(badList){
        list = badList;
    }

    let num = 1;
    for(let i=0; i<list.length; i++){
      list[i] = {...list[i], index: num, user_nick: list[i].User.user_nick}
      num++;
    }

    console.log('list', list);
    const data = {
        columns: [
          {
            label: '#',
            field: 'index',
            sort: 'asc',
          },
          {
            label: '닉네임',
            field: 'user_nick',
            sort: 'asc',
          },
          {
            label: '이유',
            field: 'reason',
            sort: 'asc',
          },
          {
            label: '_id',
            field: '_id',
            sort: 'asc',
          }
        ],
        rows: list
    };

    // console.log($('tbody tr td:nth-child(2)').length);
    // for(let i=0; i<$('tbody tr td:nth-child(2)').length; i++){
    //     console.log('1234');
    //     console.log($('tbody tr td:nth-child(2)')[i].innerHTML);
    //     let img = $('tbody tr td:nth-child(2)')[i].innerHTML;
    //     console.log(img);
    //     $('tbody tr td:nth-child(2)')[i].innerHTML = `<div style="width: 100px; height: 100px; background: url('${img}') no-repeat; background-size: 100%; margin: 0 auto;"></div>`;
    // }

    return (
        <>
            <h3><i className="fa fa-angle-right"></i> 불량회원</h3>
            <Link to="/Admin_bad_write" className="badBtn"><div>불량회원 등록</div></Link>
            <h4>불량회원 리스트</h4>
            <div className="admin_bad_table">
              <MDBDataTable
                  striped
                  bordered
                  hover
                  data={data}
              />
            </div>
        </>
    )
}

export default AdminBadList;