import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Workspace } from '../components/Workspace';


const WS: { id: number, name: string }[] = [
    {
        id: 1,
        name: 'Workspace 1'
    },
    {
        id: 2,
        name: 'Workspace 2'
    },
    {
        id: 3,
        name: 'Workspace 3'
    },
    {
        id: 4,
        name: 'Workspace 4'
    },
    {
        id: 5,
        name: 'Workspace 5'
    },
    {
        id: 6,
        name: 'Workspace 6'
    },
]

const WorkspaceContainer = styled.ul`
    display:grid;
    grid-auto-flow:column;
    justify-content:flex-start;
    column-gap:48px;
    overflow-x:scroll;
`;

export const Workspaces: FunctionComponent = () => (
    <>
        <WorkspaceContainer>

            {WS.map((workspace, index) => (
                // tslint:disable-next-line: jsx-no-multiline-js

                <Workspace key={index} name={workspace.name} id={workspace.id} />
            ))}
        </WorkspaceContainer>
    </>
)