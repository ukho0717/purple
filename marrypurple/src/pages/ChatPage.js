import React from 'react';
import ChatContainerContainer from '../containers/chat/ChatContainerContainer'
import ContentContainer from '../containers/common/ContentContainer';
import SideMenuContainer from '../containers/common/SideMenuContainer';


const ChatPage = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <ChatContainerContainer/>
            </ContentContainer>
        </div>
    )
}

export default ChatPage