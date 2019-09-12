import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from "styled-components";

type ItemProps = {
    key: string
    title: string
    type?: string
    link: string
}
type ItemState = {
    testLink : string
}

const ListItem = styled.li`
    font-size:${props => props.theme.fontSize.body};
    font-weight:${props => props.theme.fontWeight.normal};
    font-family:${props => props.theme.fontFamily};
`;
const PageItem = styled.div`
    font-size:${props => props.theme.fontSize.title};
    font-weight:${props => props.theme.fontWeight.bold};
    font-family:${props => props.theme.fontFamily};
`

export const Item: FunctionComponent<ItemProps> = ({ key, title, type, link, }) => {

    const testLink=(a:string)=>{return(`${a.slice(0 ,a.lastIndexOf('.'))}.test.com`)};

    return(
    type !== "page" ? 
    (<ListItem key={key}><a href={link}>{title}</a>{" "}<a href={testLink(link)}>[ l ]</a></ListItem>
     ) : 
    (<PageItem ><a href={link}>{title}</a></PageItem>)
    )
}
