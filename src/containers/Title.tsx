import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components'

const Header = styled.h1`
    color:${props => props.theme.colors.main};
    font-size:${props => props.theme.fontSize.header};
    font-family:RoobertBold;
`

export const Title: FunctionComponent = () => {

    const [name, setName] = useState<string>('');

    const getUser = async () => {
        const id: any = parseInt(localStorage.getItem('user')!)
        const token: any = 'Bearer ' + localStorage.getItem('token')!.toString().replace(/"/g, "")
        try {
            let myHeaders = new Headers({
                "Authorization": token,
                "Content-Type": "application/json"
            });
            const response = await fetch(
                `http://localhost:8080/user/${id}`,
                {
                    headers: myHeaders,
                    method: "GET",
                }
            )
            const json = await response.json()
            setName(json.name)
            console.log(json);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <Header>Hello {name}</Header>
    )
}