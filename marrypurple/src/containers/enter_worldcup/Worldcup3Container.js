import React, { useEffect } from 'react';
import Worldcup3 from '../../components/enter_worldcup/Worldcup3';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { winnerProfile, unloadWinner } from '../../modules/worldcup';

const Worldcup3Container = ({ match }) => {
    const { user_id } = match.params;
    console.log('user_id',user_id);
    const dispatch = useDispatch();
    const { winner, error, loading } = useSelector(({ worldcup, loading }) => ({
        winner: worldcup.winner,
        error: worldcup.error,
        loading: loading['worldcup/WINNER']
    }));

    // console.log('월드컵승자',winner);

    useEffect(() => {
        dispatch(winnerProfile(user_id));
        return () => {
            dispatch(unloadWinner());
        }
    }, [dispatch, user_id]);

    return (
        <Worldcup3 winner={winner} error={error} loading={loading}/>
    )
}

export default withRouter(Worldcup3Container);