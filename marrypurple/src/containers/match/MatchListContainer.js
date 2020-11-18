import React from 'react';
import MatchList from '../../components/match/MatchList';
import { withRouter } from 'react-router-dom';

const MatchListContainer = () => {
    return (
        <MatchList/>
    )
}

export default withRouter(MatchListContainer);