import React, { FunctionComponent, useRef, useState, useEffect } from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
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
    row-gap:16px;
    width:320px;
`;

const BoardHeader = styled.div`
    display:grid;
    grid-auto-flow:column;
    column-gap:16px;
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
  
    max-height:240px;
`;


export const Board: FunctionComponent<BoardProps> = ({ name, id, user_id, items }) => {
    const [sorted, setSorted] = useState<IItem[]>();
    const [loading, setLoading] = useState<boolean>(true)

    const sortedArray = (key: any) => {
        return function (a: any, b: any) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }
            let comparison: number = 0;
            if (a[key] > b[key]) {
                comparison = 1;
            } else if (a[key] < b[key]) {
                comparison = -1;
            }
            return comparison
        }
    }

    useEffect(() => {
        const sortedArr = items!.sort(sortedArray("order_number"))
        setSorted(sortedArr);
        setLoading(false)
    }, [])


    return (
        <BoardWrapper >
            <BoardHeader><BoardName>{name}</BoardName><Button>[-]</Button></BoardHeader>
            <Droppable droppableId={String(id)}>
                {(provided: DroppableProvided) => (
                    <ItemContainer {...provided.droppableProps} ref={provided.innerRef}>
                        {!loading ? sorted!.map((item, index) => (
                            <Item
                                key={item.id}
                                index={index}
                                id={item.id}
                                orderNumber={item.orderNumber}
                                itemName={item.name}
                                type='board'
                            />
                        )) : <div>loading...</div>}
                        {provided.placeholder}
                    </ItemContainer>
                )}
            </Droppable>
            <Button>[+]</Button>
        </BoardWrapper>
    )
}