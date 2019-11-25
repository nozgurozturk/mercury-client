import React, { FunctionComponent, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Board, IBoard } from '../components/Board';
import { IItem } from '../components/Item';
import { WorkSpaceContext } from '../utils/context/WorkspaceContext';


const initialBoard: IBoard = {
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
    result.map((item, index)=>{
        item.order_number = index
    })
    return result;
};

export const Boards: FunctionComponent = () => {
    const [boards, setBoards] = useState<IBoard[]>([initialBoard])
    const [loading, setLoading] = useState<Boolean>(true)
    const [boardName, setBoardName] = useState<String>('');
    const {workspace} = useContext(WorkSpaceContext);

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
                `http://localhost:8080/workspace/${workspace}/board`,
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

    const sendDraggablePos = async (itemID: number, itemName: string, orderNumber: number, boardID: number) => {

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
                    body: JSON.stringify({ name: itemName, order_number: orderNumber, board_id: boardID })
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
    const onDragStart = ()=> {
        // Add a little vibration if the browser supports it.
        // Add's a nice little physical feedback
        if (window.navigator.vibrate) {
          window.navigator.vibrate(100);
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
        const reOrdered = reorder(board.items!, source.index, destination.index)
        reOrdered.map((item) => {
            sendDraggablePos(item.id, item.name, item.order_number, item.board_id)
        })
        const newBoard: IBoard = {
            ...board,
            items: reOrdered
        }
        const newBoards: IBoard[] = [
            ...boards
        ]
        newBoards[Number(source.droppableId) - 1] = newBoard
        setBoards(newBoards)
    }
    useEffect(() => {
        getBoard();
    }, [workspace])

    return (
        <>
            <BoardContainer>
                <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
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