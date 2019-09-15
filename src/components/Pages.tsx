import React, { FunctionComponent } from 'react';
import styled from "styled-components"
import {Item} from './Item'
import {AddButton} from './AddButton'

const PageContainer = styled.div`
    width:630px;
    display:flex; 
    flex-direction:row;
    justify-content:flex-start;
    flex-wrap:wrap;
    position:relative;
`;

const PageWrapper = styled.div`
    width:90px;
    height:90px;
    margin-right:30px;
    margin-bottom:30px;
    text-align:center;
    line-height:80px;
    vertical-align:middle;
    border:${props => props.theme.border.bold};
    box-shadow:${props => props.theme.shadow.big};
    background-color:${props => props.theme.colors.white};
`;

export const Pages: FunctionComponent = () => (
<PageContainer>
    <PageWrapper>
        <Item key="test" title="test" link="https://www.example.com" type="page" />
    </PageWrapper>
<AddButton/>
</PageContainer>

)