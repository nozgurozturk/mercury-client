import React, { FunctionComponent } from 'react';
import styled from 'styled-components';


type TitleProps = {
    title: string
}

const TitleContainer = styled.div`
    min-width:220px;
    min-height:80px;
    border:${props => props.theme.border.bold};
    box-shadow:${props => props.theme.shadow.big};
    background-color:${props => props.theme.colors.white};
`;
const TitleText = styled.h1`
    font-weight : ${props => props.theme.fontWeight.bold};
    font-size:${props => props.theme.fontSize.title};
    font-family:${props => props.theme.fontFamily};
    line-height:80px;
    vertical-align:middle;
    text-align:center;
    margin:auto;
`;

export const Title: FunctionComponent<TitleProps> = ({ title }) => (
    <TitleContainer>
        <TitleText>{title.toUpperCase()}</TitleText>
    </TitleContainer>
)