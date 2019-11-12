import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Weather } from "../components/Weather";
import { Time } from "../components/Time";
import {Settings} from "../components/Settings";

const InfoContainer = styled.div`
    grid-area:INF;
    display:grid;
    grid-auto-flow:row;
    grid-template-rows: 1fr 4fr 1fr;
`;

export const Infos: FunctionComponent = () => (
    <InfoContainer>
        <Time />
        <Weather />
        <Settings />
    </InfoContainer>
)