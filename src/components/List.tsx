import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

type ListProps = {
    children: ReactNode
}

const ListContainer = styled.div`
    min-width:300px;
    min-height:300px;
    border:${props => props.theme.border.bold};
    box-shadow:${props => props.theme.shadow.big};
    background-color:${props => props.theme.colors.white};
`;

export const List: FunctionComponent<ListProps> = ({ children }) => (
    <ListContainer>
        {children}
    </ListContainer>
)