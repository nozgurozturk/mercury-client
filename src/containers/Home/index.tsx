import React, { FunctionComponent, useContext, useState, useEffect } from 'react';
import styled from 'styled-components'

import { ThemeContext } from '../../utils/context/ThemeContext';
import {Boards} from "../Boards"


const Title = styled.h1`
    color:${props => props.theme.colors.gray800};
  
`;

export const Home: FunctionComponent = () => {
    const [isDark, setDark] = useState<boolean>(true);
    const { themeDispatch } = useContext(ThemeContext);


    return (
        <>
            <Title>Welcome to Mercury</Title>
            <button onClick={() => { setDark(!isDark); themeDispatch({ type: isDark ? "DARK" : 'LIGHT' }) }}>TOGGLE THEME</button>
            <Boards title='Boards'/>
        </>
    )
}