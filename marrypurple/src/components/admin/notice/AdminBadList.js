import React from 'react';
import '../../../lib/styles/admin/adminBad.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { MDBDataTable } from 'mdbreact';

const AdminBadList = ({ badList, history, loading }) => {
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

    const click = e => {
      const _id = $(e.target).parent().children('td:last-child')[0].innerText;
      console.log($(e.target).parent().children('td:last-child')[0].innerText);

      history.push(`/Admin_bad_read/${_id}`);
    }

    return (
        <>
          {!loading && (
            <>
              <h3><i className="fa fa-angle-right"></i> 불량회원</h3>
              <Link to="/Admin_bad_write" className="badBtn"><div>불량회원 등록</div></Link>
              <h4>불량회원 리스트</h4>
              <div className="admin_bad_table">
                <MDBDataTable
                    striped
                    bordered
                    hover
                    onClick={click}
                    data={data}
                />
              </div>
            </>
          )}
        </>
    )
}

export default AdminBadList;