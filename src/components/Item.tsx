import React, { FunctionComponent } from 'react';
import styled from 'styled-components'
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';


type ItemProps = {
    id: number
    index: number
    order_number: number
    board_id: number
    item_name: string
    type: string
}


const ItemWrapper = styled.li`
    position:relative;
    display:grid;
    grid-auto-flow:column;
    column-gap:16px;
    justify-content:flex-start;
    align-items:center;
    height:48px;
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

export const Item: FunctionComponent<ItemProps> = ({ id, index, item_name, type }) => {

    if (type === 'board') {
        return (
            <Draggable draggableId={String(id)} index={index}>
                {(provided: DraggableProvided) => (
                    <ItemWrapper {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <EditButton>[e]</EditButton>
                        <ItemName>{item_name}</ItemName>
                        <Button>[git]</Button>
                        <Button>[+]</Button>
                    </ItemWrapper>

                )}
            </Draggable>

        )
    } else {
        return (
            <ItemWrapper>
                <ItemName>{item_name}</ItemName>
            </ItemWrapper>
        )
    }
}


export interface IItem {
    id: number
    index: number
    order_number: number
    board_id: number
    name: string
    type: string
}