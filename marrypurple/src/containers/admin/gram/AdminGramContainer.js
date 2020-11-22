import React, { useEffect } from 'react';
import AdminGram from '../../../components/admin/gram/AdminGram';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { gramListPosts } from '../../../modules/listGram';

const AdminGramContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { listGram, error, loading } = useSelector(
        ({ listGram, loading }) => ({
            listGram: listGram.list,
            error: listGram.error,
            loading: loading['gram/GRAMLIST_POSTS']
        })
    );
    
        console.log('listGram', listGram);

    useEffect(() => {
        dispatch(gramListPosts());
    }, [dispatch]);
    
    return (
        <AdminGram history={history} listGram={listGram}/>
    )
}

export default withRouter(AdminGramContainer);
