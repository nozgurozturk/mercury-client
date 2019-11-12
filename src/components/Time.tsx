import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';

const TimeContainer = styled.div`
    display:grid;
    grid-auto-flow:row;
`;

const TimeStyle = styled.div`
    color:${props => props.theme.colors.main};
    font-family:RoobertBold;
    text-align:right;
`;

const Day = styled(TimeStyle)`
    font-size:${props => props.theme.fontSize.body};
`;

const Hour = styled(TimeStyle)`
    font-size:${props => props.theme.fontSize.header};
`;

export const Time: FunctionComponent = () => {
    const [day, setDay] = useState<string>('')
    const [hour, setHour] = useState<string>('')

    useEffect(() => {
        const currentTime = setInterval(() => {
            const date = new Date()
            setDay(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
            setHour(`${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`)
        }, 1000)
        return () => clearInterval(currentTime)
    }, [])

    return (
        <TimeContainer>
            <Day>{day}</Day>
            <Hour>{hour}</Hour>
        </TimeContainer>
    )
}