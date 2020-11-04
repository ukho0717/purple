import React from 'react';
import styled from 'styled-components';

const SideMenuResponsiveBlock = styled.div`
    
    @media (max-width: 768px) {
        display: none;
    }
`;

const SideMenuResponsive = ({ children, ...rest }) => {
    return <SideMenuResponsiveBlock {...rest}>{children}</SideMenuResponsiveBlock>
};

export default SideMenuResponsive;