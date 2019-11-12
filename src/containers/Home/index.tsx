import React, { FunctionComponent, useContext, useState, useEffect } from 'react';
import styled from 'styled-components'

import { Title } from '../Title';
import { Workspaces } from '../Workspaces';
import { Boards } from "../Boards"
import { Shortcuts } from '../Shortcuts';
import { Infos } from '../Infos'

const HomeContainer = styled.main`
    max-width:1200px;
    max-height:calc(100vh - 48px);
    margin:24px auto;
    padding:0px 24px;
    display:grid;
    grid-template-areas: 
    "TIT TIT INF"
    "WS WS INF"
    "BRD BRD INF"
    "STC STC INF";
    grid-template-rows: 1fr 1fr 8fr 2fr;
    grid-template-columns: 9fr 1fr 3fr;
`;

export const Home: FunctionComponent = () => {

    return (
        <HomeContainer>
            <Title />
            <Workspaces />
            <Boards />
            <Shortcuts />
            <Infos />
        </HomeContainer>
    )
}