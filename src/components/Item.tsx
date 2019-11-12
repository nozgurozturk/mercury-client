import React, { FunctionComponent } from 'react';
import styled from 'styled-components'



type ItemProps = {
itemName: string
}

const ItemWrapper = styled.li`
    position:relative;
    display:grid;
    grid-auto-flow:column;
    column-gap:16px;
    justify-content:flex-start;
    align-items:center;
`;

const ItemName = styled.a`
    color:${props => props.theme.colors.gray800};
    font-size:${props => props.theme.fontSize.body};
    font-family:RoobertRegular;
`
const Button = styled.div`
    color:${props => props.theme.colors.gray400};
    font-size:${props => props.theme.fontSize.info};
    font-family:RoobertLight;
`
const EditButton = styled(Button)`
    position:absolute;
    left:-36px;
`

export const Item: FunctionComponent<ItemProps> = ({ itemName }) => (
<ItemWrapper>
    <EditButton>[e]</EditButton>
    <ItemName>{itemName}</ItemName>
    <Button>[git]</Button>
    <Button>[+]</Button>
</ItemWrapper>
)

export interface IItem {
    name: string
}