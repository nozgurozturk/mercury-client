import React, { FunctionComponent, useState, useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../utils/context/ThemeContext';

const ThemeButton = styled.button`
    outline:none;
    border:none;
    width:48px;
    height:48px;
    border-radius:24px;
    background-color:${props => props.theme.colors.gray800};
    color:${props => props.theme.colors.gray400};
    font-size:${props => props.theme.fontSize.body};
    font-family:RoobertRegular;
    margin:auto;
`;

export const Settings: FunctionComponent = () => {
    const [isDark, setDark] = useState<boolean>(true);
    const { themeDispatch } = useContext(ThemeContext);
    return (
        
        <ThemeButton onClick={() => { setDark(!isDark); themeDispatch({ type: isDark ? "DARK" : 'LIGHT' }) }}>.</ThemeButton>
    )
}