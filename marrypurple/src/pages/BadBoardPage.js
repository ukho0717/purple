import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';

const BadBoardPage = () => {
    return (
        <>
            <div id="wrap">
                <SideMenuContainer/>
                <ContentContainer>불량회원</ContentContainer>
            </div>
        </>
    )
}

export default BadBoardPage;