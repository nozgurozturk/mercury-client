import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Item, IItem } from './Item';

type BoardProps = {
    id: number
    name: string
    user_id: number
    items?: [IItem]
}

const BoardWrapper = styled.div`
    display:grid;
    grid-auto-flow:row;
    row-gap:24px;
    width:384px;
`;

const BoardHeader = styled.div`
    display:grid;
    grid-auto-flow:column;
    column-gap:24px;
    align-items:center;
   
`;

const BoardName = styled.h3`
    color:${props => props.theme.colors.main};
    font-size:${props => props.theme.fontSize.header};
    font-family:RoobertBold;
`;

const Button = styled.div`
    color:${props => props.theme.colors.gray400};
    font-size:${props => props.theme.fontSize.body};
    font-family:RoobertRegular;
`;

const ItemContainer = styled.ul`
    display:grid;
    grid-auto-flow:row;
    align-items:flex-start;
    height:240px;
    row-gap:24px;
    overflow-y:scroll;

`



export const Board: FunctionComponent<BoardProps> = ({ name, id, user_id, items }) => (
    <BoardWrapper>
        <BoardHeader><BoardName>{name}</BoardName><Button>[-]</Button></BoardHeader>
        <ItemContainer>
            {items!.map((item, index) => (
                // tslint:disable-next-line: jsx-no-multiline-js
                <Item key={index} itemName={item.name} />
            ))}
        </ItemContainer>
        <Button>[+]</Button>
    </BoardWrapper>
)