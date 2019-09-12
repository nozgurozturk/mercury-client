import React, { FunctionComponent, ReactNode, ReactElement, ReactComponentElement } from 'react';
import styled, { StyledComponent, ThemedStyledInterface } from 'styled-components';
import {Item} from "./Item"

type ListProps = {
    children: ReactNode
}

const ListContainer = styled.div`
    margin-top:16px;
    min-width:220px;
    min-height:120px;
    max-height:220px;
    overflow-y:scroll;
    border:${props => props.theme.border.bold};
    box-shadow:${props => props.theme.shadow.big};
    background-color:${props => props.theme.colors.white};
`;
const ListWrapper = styled.ul`
    list-style:none;

`

export const List: FunctionComponent<ListProps> = ({ children}) => (
    <ListContainer>
        <ListWrapper>
        {children}
        </ListWrapper>
    </ListContainer>
)