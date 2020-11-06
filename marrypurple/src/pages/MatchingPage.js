import React from 'react';
import MatchingContainers from '../containers/matching/MatchingContainer'
import SideMenuContainer from '../containers/common/SideMenuContainer';

const MatchingPage = () => {
    return(
        <div id="wrap">
            <SideMenuContainer/>
            <MatchingContainers/>            
        </div>
    )
}

export default MatchingPage