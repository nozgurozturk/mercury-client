import React, { FunctionComponent, useRef, useState, useEffect } from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { Item, IItem } from './Item';

type BoardProps = {
    id: number
    name: string
    items?: IItem[]
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
    overflow-y:scroll;
`;


export const Board: FunctionComponent<BoardProps> = ({ name, id, items }) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [itemName, setItemName] = useState<string>('')

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

    // const getItems = async ()=> {
    //     const token: any = 'Bearer ' + localStorage.getItem('token')!.toString().replace(/"/g, "")
    //     try {
    //         let myHeaders = new Headers({
    //             "Authorization": token,
    //             "Content-Type": "application/json"
    //         });
    //         const response = await fetch(
    //             // `https://mercury-server.herokuapp.com/user/${id}`,
    //             `http://localhost:8080/board/${id}/item`,
    //             {
    //                 headers: myHeaders,
    //                 method: "GET",
    //             }
    //         )
    //         const json = await response.json();
    //         if (response.ok) {
    //             setItems(json)
    //             setLoading(false);
    //             console.log(json)
    //         } else {
    //             console.log(json)
    //             console.log('Something wrong')
    //         }
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    const sendItem = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setLoading(true);
        const token: any = 'Bearer ' + localStorage.getItem('token')!.toString().replace(/"/g, "")
        try {
            let myHeaders = new Headers({
                "Authorization": token,
                "Content-Type": "application/json"
            });
            const response = await fetch(
                // `https://mercury-server.herokuapp.com/user/${id}`,
                `http://localhost:8080/item`,
                {
                    headers: myHeaders,
                    method: "POST",
                    body: JSON.stringify({ name: itemName, board_id: id })
                }
            )
            const json = await response.json();
            if (response.ok) {
                if (json.status) {
                    console.log(json)
                    console.log('Succesfuly send board data to server')
                }
                setLoading(false);
                setItemName('');
            } else {
                console.log(json)
                console.log('Something wrong')
            }
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
            items!.sort(sortedArray("order_number"))
            setLoading(false)
    }, [])
    return (
        <BoardWrapper >
            <BoardHeader><BoardName>{name}</BoardName><Button>[-]</Button></BoardHeader>
            <Droppable droppableId={String(id)}>
                {(provided: DroppableProvided) => (
                    <ItemContainer {...provided.droppableProps} ref={provided.innerRef}>
                        {!loading ? items!.map((item, index) => (
                            <Item
                                key={item.id}
                                index={index}
                                id={item.id}
                                board_id={item.board_id}
                                order_number={item.order_number}
                                item_name={item.name}
                                type='board'
                            />
                        )) : <div>loading...</div>}
                        {provided.placeholder}
                    </ItemContainer>
                )}
            </Droppable>
            <form onSubmit={sendItem}>
                <input onChange={e => (setItemName(e.target.value))} type='text' required={true} />
                <input type="submit" value="submit" />
            </form>
            <Button>[+]</Button>
        </BoardWrapper>
    )
}

export interface IBoard {
    id: number
    name: string
    workspace_id: number
    items?: IItem[]
}