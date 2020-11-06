import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import BadBoardContainer from '../containers/notice/BoardBadContainer';

const BadBoardPage = () => {
    return (
        <>
            <div id="wrap">
                <SideMenuContainer/>
                <ContentContainer >
                    안녕하세요
                </ContentContainer>
            </div>
        </>
    )
}

export default BadBoardPage;