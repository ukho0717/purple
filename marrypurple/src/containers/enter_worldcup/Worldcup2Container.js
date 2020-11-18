import React, { useEffect } from 'react';
import Worldcup2 from '../../components/enter_worldcup/Worldcup2';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { worldcupList } from '../../modules/worldcup';

const Worldcup2Container = ({ history }) => {
    const dispatch = useDispatch();
    const { userList, error, loading } = useSelector(({ worldcup, loading }) => ({
        userList: worldcup.list,
        error: worldcup.error,
        loading: loading['worldcup/WORLDCUP_LIST']
    }))

    console.log('userList123',userList);

    let usersList = new Array();
    usersList = userList;

    useEffect(() => {
        dispatch(worldcupList());
    }, [dispatch]);

    return (
        <Worldcup2 userList={userList} history={history}/>
    )
}

export default withRouter(Worldcup2Container);