import React from 'react';
import '../../../lib/styles/admin/adminGram.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
// import DataTable from "@bit/adeoy.utils.data-table";
import { MDBDataTable } from 'mdbreact';

const AdminMain = ({ history, listGram }) => {
    let listGrams = [];
    if(listGram){
        listGrams = listGram;
    }

    let num = 1;
    for(let i=0; i<listGrams.length; i++){
      // console.log(listGrams[i]);
      listGrams[i] = {...listGrams[i], index: num, user_nick: listGrams[i].User.user_nick}
      num++;
    }

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
            label: '내용',
            field: 'content',
            sort: 'asc',
          },
          {
            label: '좋아요 수',
            field: 'likeCount',
            sort: 'asc',
          },
          {
            label: '게시 날짜',
            field: 'writeDate',
            sort: 'asc',
          }
        ],
        rows: listGrams
      };

    const click = (e) => {
      console.log(e.target);
      // history.push('/Admin_gram_read/12345');
    };

    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
            </Helmet>
            <h3><i class="fa fa-angle-right"></i> 메리퍼플그램</h3>
            <MDBDataTable
                striped
                bordered
                hover
                onClick={click}
                data={data}
            />
        </>
    )
}

export default AdminMain;