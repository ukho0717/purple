import React, { useEffect } from 'react';
import GramRead from '../../components/enter_gram/GramRead';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readGram, unloadGram } from '../../modules/gramPost';

const GramReadContainer = ({ match }) => {
    const { gram_id } = match.params;
    console.log(gram_id);
    const dispatch = useDispatch();
    const { gram, error, loading } = useSelector(
        ({ gramPost, loading }) => ({
            gram: gramPost.gram,
            error: gramPost.error,
            loading: loading['gram/READ_GRAM']
        })
    );

    useEffect(() => {
        dispatch(readGram(gram_id));
        return () => {
            dispatch(unloadGram());
        }
    }, [dispatch, gram_id]);

    return (
        <GramRead gram={gram} loading={loading} error={error}/>
    )
}

export default withRouter(GramReadContainer);