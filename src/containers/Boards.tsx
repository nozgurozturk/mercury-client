import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Board } from '../components/Board';
import { IItem } from '../components/Item';

type BoardType = {
    id: number
    name: string
    user_id: number
    items?: IItem[]
}
const initialBoard: BoardType = {
    id: 0,
    name: "You don't have board",
    user_id: 0,
}

const BoardContainer = styled.ul`
    grid-area:BRD;
    display:grid;
    grid-auto-flow:column;
    column-gap:48px;
    align-items:flex-start;
    overflow-x:scroll;
`;

const reorder = (list: IItem[], startIndex: number, endIndex: number): IItem[] => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const Boards: FunctionComponent = () => {
    const [boards, setBoards] = useState<BoardType[]>([initialBoard])
    const [loading, setLoading] = useState<Boolean>(true)
    const [boardName, setBoardName] = useState<String>('');

    const getBoard = async () => {
        const id: any = parseInt(localStorage.getItem('user')!)
        const token: any = 'Bearer ' + localStorage.getItem('token')!.toString().replace(/"/g, "")
        try {
            let myHeaders = new Headers({
                "Authorization": token,
                "Content-Type": "application/json"
            });
            const response = await fetch(
                // `https://mercury-server.herokuapp.com/user/${id}`,
                `http://localhost:8080/board`,
                {
                    headers: myHeaders,
                    method: "GET",
                }
            )
            const json = await response.json()
            setBoards(json)
            setLoading(false)
            console.log(json);
        } catch (error) {
            console.error(error)
        }
    }
    const sendBoard = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const token: any = 'Bearer ' + localStorage.getItem('token')!.toString().replace(/"/g, "")
        try {
            let myHeaders = new Headers({
                "Authorization": token,
                "Content-Type": "application/json"
            });
            const response = await fetch(
                // `https://mercury-server.herokuapp.com/user/${id}`,
                `http://localhost:8080/board`,
                {
                    headers: myHeaders,
                    method: "POST",
                    body: JSON.stringify({ name: boardName })
                }
            )
            const json = await response.json();
            if (response.ok) {
                if (json.status) {
                    console.log(json)
                    console.log('Succesfuly send board data to server')
                }
            } else {
                console.log(json)
                console.log('Something wrong')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const sendDraggablePos = async (itemID: number, itemName: string, orderNumber: number, boardID:number) => {
        
        const token: any = 'Bearer ' + localStorage.getItem('token')!.toString().replace(/"/g, "")
        try {
            let myHeaders = new Headers({
                "Authorization": token,
                "Content-Type": "application/json"
            });
            const response = await fetch(
                // `https://mercury-server.herokuapp.com/user/${id}`,
                `http://localhost:8080/item/${String(itemID)}`,
                {
                    headers: myHeaders,
                    method: "PUT",
                    body: JSON.stringify({ name: itemName, order_number: orderNumber, board_id:boardID })
                }
            )
            const json = await response.json();
            if (response.ok) {
                if (json.status) {
                    console.log(json)
                    console.log('Succesfuly send item data to server')
                }
            } else {
                console.log(json)
                console.log('Something wrong')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onDragEnd = (result: DropResult): void => {
        const { destination, source } = result;
        //if destination is not valid return 
        if (!destination) {
            return
        }
        //if destination and source are same return 
        if (destination.index === source.index) {
            return;
        }
        const board = boards[Number(source.droppableId) - 1];
        const newItems: IItem[] = [...board.items!];
        const reOrdered = reorder(newItems, source.index, destination.index)
        newItems[source.index].order_number = destination.index
        newItems.map(item=>{
            if(item.id>destination.index){
                item.order_number += 1;
                sendDraggablePos(item.id, item.name, item.order_number, item.board_id)
            }
            
        })
        const newBoard: BoardType = {
            ...board,
            items: reOrdered
        }
        console.log(newBoard);
        
        const newBoards: BoardType[] = [
            ...boards
        ]
        newBoards[Number(source.droppableId) - 1] = newBoard
        setBoards(newBoards)
    }
    useEffect(() => {
        getBoard();
    }, [])

    return (
        <>
            <BoardContainer>
                <DragDropContext onDragEnd={onDragEnd}>
                    {!loading ? boards.map((board, index) => {
                        // tslint:disable-next-line: jsx-no-multiline-js
                        return (
                            <Board key={index} name={board.name} items={board.items} id={board.id} user_id={board.user_id} />
                        )
                    }) : <>Loading...</>}
                </DragDropContext>
            </BoardContainer>

        </>
    )
}