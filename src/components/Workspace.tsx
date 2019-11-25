import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IBoard } from './Board';

type WSProps =  {
    id: number
    name: string
    boards : IBoard[]
}

const WS = styled.h2`
    color:${props => props.theme.colors.main};
    font-size:${props => props.theme.fontSize.body};
    font-family:RoobertRegular;
    width:320px;
`;

export const Workspace: FunctionComponent<WSProps> = ({ id, name, boards }) => (
    <WS>{name}</WS>
)

export interface IWorkspace {
    id: number
    name: string
    boards : IBoard[]

}