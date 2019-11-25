import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { Workspace, IWorkspace } from '../components/Workspace';
import { WorkSpaceContext } from '../utils/context/WorkspaceContext';

const WorkspaceContainer = styled.ul`
     grid-area:WS;
    display:grid;
    grid-auto-flow:column;
    justify-content:flex-start;
    column-gap:48px;
    overflow-x:scroll;
`;

export const Workspaces: FunctionComponent = () => {
    const [workspaces, setWorkspace] = useState<IWorkspace[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const {workspaceDispatch} = useContext(WorkSpaceContext);
    const getWorkspace = async () => {
        const id: any = parseInt(localStorage.getItem('user')!)
        const token: any = 'Bearer ' + localStorage.getItem('token')!.toString().replace(/"/g, "")
        try {
            let myHeaders = new Headers({
                "Authorization": token,
                "Content-Type": "application/json"
            });
            const response = await fetch(
                // `https://mercury-server.herokuapp.com/user/${id}`,
                `http://localhost:8080/workspace`,
                {
                    headers: myHeaders,
                    method: "GET",
                }
            )
            const json = await response.json()
            setWorkspace(json)
            setLoading(false)
            console.log(json);
        } catch (error) {
            console.error(error)
        }
    }
   useEffect(()=>{
        getWorkspace();
        workspaceDispatch({type:'SET_WORKPSACE', payload:workspaces![0].id})
   },[]) 
    return (
        <>
            <WorkspaceContainer>

                {!loading ? workspaces!.map((workspace, index) => (
                    // tslint:disable-next-line: jsx-no-multiline-js

                    <Workspace key={index} name={workspace.name} id={workspace.id} boards={workspace.boards} />
                )): <>Loading...</>}
            </WorkspaceContainer>
        </>
    )
}