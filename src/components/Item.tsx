import React, { FunctionComponent } from 'react';
import styled from 'styled-components'



type ItemProps = {
itemName: string
}

const ItemWrapper = styled.li`
    display:grid;
    grid-auto-flow:column;
    row-gap:24px;
    align-items:center;
`;

const ItemName = styled.a`
    color:${props => props.theme.colors.gray800};
    font-size:${props => props.theme.fontSize.body};
    font-family:RoobertRegular;
    margin-right:8px;
`
const Button = styled.div`
    color:${props => props.theme.colors.gray400};
    font-size:${props => props.theme.fontSize.info};
    font-family:RoobertLight;
`

export const Item: FunctionComponent<ItemProps> = ({ itemName }) => (
<ItemWrapper>
    <Button>[e]</Button>
    <ItemName>{itemName}</ItemName>
    <Button>[git]</Button>
    <Button>[+]</Button>
</ItemWrapper>
)

export interface IItem {
    name: string
}