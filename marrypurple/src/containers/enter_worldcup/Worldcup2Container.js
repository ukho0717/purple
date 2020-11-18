import React, { useEffect } from 'react';
import Worldcup2 from '../../components/enter_worldcup/Worldcup2';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { worldcupList } from '../../modules/worldcup';

const Worldcup2Container = ({ history }) => {
    const dispatch = useDispatch();
    const { list, error, loading } = useSelector(({ worldcup, loading }) => ({
        list: worldcup.list,
        error: worldcup.error,
        loading: loading['worldcup/WORLDCUP_LIST']
    }))

    console.log('userList123',list);

    let usersList = new Array();
    usersList = list;

    useEffect(() => {
        dispatch(worldcupList());
    }, [dispatch]);

    return (
        <Worldcup2 userList={list} history={history} error={error} loading={loading}/>
    )
}

export default withRouter(Worldcup2Container);