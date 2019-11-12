import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type WSProps =  {
    id: number
    name: string
}

const WS = styled.h2`
    color:${props => props.theme.colors.main};
    font-size:${props => props.theme.fontSize.body};
    font-family:RoobertRegular;
    width:320px;
`;

export const Workspace: FunctionComponent<WSProps> = ({ id, name }) => (
    <WS>{name}</WS>
)