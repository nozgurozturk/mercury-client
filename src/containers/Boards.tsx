import React, { FunctionComponent, useEffect, useState } from 'react';

type Props = {
    title: string
}

type Board ={
    id : number
    name : string
    user_id : number
    items? : []
}
const initialBoard : Board = {
    id:0,
    name:"You don't have board",
    user_id:0

}

export const Boards: FunctionComponent<Props> = ({ title }) => {
    const[boards, setBoards] = useState<[Board]>([initialBoard])
    const [loading, setLoading] = useState<Boolean>(true)
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

    useEffect(() => {
        getBoard()
    
    }, [])
    return (
        <>
        <h1>{title}</h1>
        <ul>
        {!loading ? boards.map((board, index)=>{
            return(
                <li key={index}>{board.name}
                    <ul>
                    {board.items!.map((item, iindex)=>(
                        <li key={iindex}>{item["name"]}</li>
                    ))}
                </ul>
                </li>
            )
        }): <>Loading...</>}
        </ul>
        </>
    )
}