import React, { useEffect } from 'react';
import AdminGramRead from '../../../components/admin/gram/AdminGramRead';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readGram, unloadGram, updateHideGram } from '../../../modules/gramPost';

const AdminGramContainer = ({ match }) => {
    const { _id } = match.params;
    const gram_id = _id

    const dispatch = useDispatch();
    const { gram, error, loading } = useSelector(
        ({ gramPost, loading }) => ({
            gram: gramPost.gram,
            error: gramPost.error,
            loading: loading['gram/READ_GRAM']
        })
    );

    console.log(gram);

    useEffect(() => {
        dispatch(readGram(gram_id));
        return () => {
            dispatch(unloadGram());
        }
    }, [dispatch, gram_id]);

    const onClickHide = () => {
        alert('숨김');
        dispatch(updateHideGram(gram_id));
        // dispatch(readGram(gram_id));
        // return () => {
        //     dispatch(unloadGram());
        // }
    }
    const onClickShow = () => {
        alert('보임');
    }

    const clickBack = () => {
        window.history.back();
    }

    return (
        <AdminGramRead gram={gram} onClickHide={onClickHide} onClickShow={onClickShow} clickBack={clickBack}/>
    )
}

export default withRouter(AdminGramContainer);
