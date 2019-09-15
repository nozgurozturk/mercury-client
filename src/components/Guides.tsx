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
        </List>
        <ButtonContainer>
            <AddButton />
        </ButtonContainer>

    </InnerContainer>
)