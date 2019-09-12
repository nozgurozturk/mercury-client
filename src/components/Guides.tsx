import React, { FunctionComponent } from 'react';
import styled from "styled-components"
import { List } from './List'
import { AddButton } from './AddButton'
import { Item } from './Item'
import { Title } from './Title'



const InnerContainer = styled.section`
    display:flex; 
    flex-direction:column;
`;
const ButtonContainer = styled.div`
    position: relative;
    height:100px;
    margin-top:16px;
`;

export const Guides: FunctionComponent = ({ }) => (
    <InnerContainer>
        <Title title="guides and rules" />
        <List>
            <Item key="example" title="guide" link="https://www.example.com" type="guide" />
            <Item key="example" title="rule" link="https://www.example.com" type="rule" />
            <Item key="example" title="rule" link="https://www.example.com" type="rule" />
            <Item key="example" title="guide" link="https://www.example.com" type="guide" />
            <Item key="example" title="example" link="https://www.example.com" type="project" />
            <Item key="example" title="example" link="https://www.example.com" type="project" />
        </List>
        <ButtonContainer>
            <AddButton />
        </ButtonContainer>

    </InnerContainer>
)