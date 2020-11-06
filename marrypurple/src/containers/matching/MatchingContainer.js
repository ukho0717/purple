import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Matching from '../../components/matching/Matching';
import { matchingList, unloadList } from '../../modules/matching'

const MatchingContainer = () => {
    const dispatch = useDispatch();
    const { matching, error, loading } = useSelector(({ matching, loading }) => ({
        matching: matching.matching,
        error: matching.error,
        loading: loading['MATCH_LIST']
    }));
    console.log(matching)
    useEffect(() => {
        dispatch(matchingList());
        return () => {
            dispatch(unloadList());
        };
    }, [dispatch]);
    return (
        <div id="content">
            <div id="contentBox">
                <Matching matching={matching} error={error} loading={loading}/>
            </div>
        </div>
    )
}

export default MatchingContainer;