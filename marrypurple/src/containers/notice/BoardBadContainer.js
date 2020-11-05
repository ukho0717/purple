import React from 'react';
import ContentContainer from '../common/ContentContainer';
import BadBoard from '../../components/notice/BadBoard';

const BoardBadContainer = () => {

    return (
        // <ContentContainer>
        //     <div><h2>안녕</h2></div>
        // </ContentContainer>
        <div id="content">
            <div id="contentBox">
                <BadBoard/>
            </div>
        </div>
    )
}

export default BoardBadContainer;