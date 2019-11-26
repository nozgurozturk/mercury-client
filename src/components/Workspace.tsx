import React, { FunctionComponent, useState, useContext } from 'react';
import styled from 'styled-components';
import { IBoard } from './Board';
import { WorkSpaceContext } from '../utils/context/WorkSpaceContext';

type WSProps =  {
    id: number
    name: string
    boards? : IBoard[]
}

const WS = styled.h2`
    color:${props => props.theme.colors.main};
    font-size:${props => props.theme.fontSize.body};
    font-family:RoobertRegular;
    width:320px;
`;

export const Workspace: FunctionComponent<WSProps> = ({ id, name }) => {
    const {workspaceDispatch} = useContext(WorkSpaceContext);
    
    return(
    <WS onClick={()=>workspaceDispatch({type:'SET_WORKSPACE', payload:id})}>{name}</WS>
)}

export interface IWorkspace {
    id: number
    name: string
    boards : IBoard[]

}