import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import {Item} from '../components/Item';

type Props = {
    title: string
}

const ShortcutContainer = styled.div`
    grid-area:STC;
`;

const ShortcutTitle = styled.h3`
    color:${props => props.theme.colors.main};
    font-size:${props => props.theme.fontSize.header};
    font-family:RoobertBold;
    margin-bottom:16px;
`;

const ShortcutWrapper = styled.ul`
    display:grid;
    grid-auto-flow:column;
    justify-content:flex-start;
    column-gap:48px;
    overflow-x:scroll;
`;

export const Shortcuts: FunctionComponent = () => {

    return (
        <ShortcutContainer>
        <ShortcutTitle>Shortcuts</ShortcutTitle>
        <ShortcutWrapper>
            <Item index={1} id={99} order_number={1} board_id={123} type='shortcut' item_name='github'/>
            <Item index={2} id={98} order_number={2} board_id={123}  type='shortcut' item_name='jira'/>
            <Item index={3} id={97} order_number={3} board_id={123}  type='shortcut' item_name='figma'/>
            <Item index={4}  id={96} order_number={4} board_id={123} type='shortcut' item_name='react'/>
        </ShortcutWrapper>
        </ShortcutContainer>
    )
}