import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import {Item} from '../components/Item';

type Props = {
    title: string
}

const ShortcutTitle = styled.h3`
    color:${props => props.theme.colors.main};
    font-size:${props => props.theme.fontSize.header};
    font-family:RoobertBold;
    margin-bottom:16px;
`;

const ShortcutContainer = styled.ul`
    display:grid;
    grid-auto-flow:column;
    justify-content:flex-start;
    column-gap:48px;
    overflow-x:scroll;
`;

export const Shortcuts: FunctionComponent = () => {

    return (
        <>
        <ShortcutTitle>Shortcuts</ShortcutTitle>
        <ShortcutContainer>
            <Item type='shortcut' itemName='github'/>
            <Item type='shortcut' itemName='jira'/>
            <Item type='shortcut' itemName='figma'/>
            <Item type='shortcut' itemName='react'/>
        </ShortcutContainer>
        </>
    )
}