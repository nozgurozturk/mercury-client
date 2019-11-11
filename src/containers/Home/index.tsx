import React, { FunctionComponent, useContext, useState, useEffect } from 'react';
import styled from 'styled-components'

import { ThemeContext } from '../../utils/context/ThemeContext';

import {Title} from '../Title';
import {Workspaces} from '../Workspaces';
import {Boards} from "../Boards"


export const Home: FunctionComponent = () => {
    const [isDark, setDark] = useState<boolean>(true);
    const { themeDispatch } = useContext(ThemeContext);
   
    return (
        <>
            <Title/>
            <Workspaces />
            <Boards />
            <button onClick={() => { setDark(!isDark); themeDispatch({ type: isDark ? "DARK" : 'LIGHT' }) }}>TOGGLE THEME</button>
        </>
    )
}