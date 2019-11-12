import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from "styled-components";
import { API_KEY, baseUrl } from "../utils/config";
import { Cloud, CloudRain, CloudLightRain, CloudLightning, CloudSnow, Sun } from 'styled-icons/boxicons-regular'

const WeatherContainer = styled.div`
    margin-top:32px;
    display:grid;
    grid-auto-flow:row;
    text-align:right;
`
const WeatherWrapper = styled.ul`
    display:grid;
    grid-auto-flow:row;
    row-gap:16px;

`
const WeatherItem = styled.li`
    display:grid;
    grid-auto-flow:column;
    column-gap:24px;
    align-items:center;
    justify-content:flex-end;
    font-size:${props => props.theme.fontSize.body};
    color:${props => props.theme.colors.gray800};
    font-family:RoobertRegular;

`
const DayTitle = styled.h1`
    color:${props => props.theme.colors.main};
    font-size:${props => props.theme.fontSize.header};
    font-family:RoobertBold;
    font-variant-caps:all-small-caps;
`

export const Weather: FunctionComponent = () => {

    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    const getWheaterData = async () => {
        try {
            const response = await fetch(
                `${baseUrl}745044&appid=${API_KEY}`,
                {
                    method: "GET",
                }
            )
            const json = await response.json()
            setData(json)
            setLoading(false)
            console.log(json);
        } catch (error) {
            console.error(error);
            setLoading(true);
        }
    }

    useEffect(() => {
        getWheaterData();
    }, [])


    const renderIcon = (icon: string) => {

        switch (icon) {
            case "Clear":
                return <Sun size="40" />
            case "Clouds":
                return <Cloud size="40" />
            case "Thunderstorm":
                return <CloudLightning size="40" />
            case "Drizzle":
                return <CloudLightRain size="40" />
            case "Rain":
                return <CloudRain size="40" />
            case "Snow":
                return <CloudSnow size="40" />
            default:
                return <div>No Icon</div>
        }
    }

    const renderList = (array: any): any => {
        // tslint:disable-next-line: jsx-wrap-multiline
        return (
            <>
                <WeatherWrapper>
                    <DayTitle>Today</DayTitle>
                    {array.list.map((e: { dt: string | number | undefined; weather: { main: string }[]; dt_txt: string | number; }) =>
                        // tslint:disable-next-line: jsx-no-multiline-js
                        (<WeatherItem key={e.dt}><div>{(e.dt_txt).toString().slice(10, 16)}</div><div>{renderIcon(e.weather[0].main)}</div></WeatherItem>)).slice(0, 3)}
                    <DayTitle>Tomorrow</DayTitle>
                    {array.list.map((e: { dt: string | number | undefined; weather: { main: string }[]; dt_txt: string | number; }) =>
                        // tslint:disable-next-line: jsx-no-multiline-js
                        (<WeatherItem key={e.dt}><div>{(e.dt_txt).toString().slice(10, 16)}</div><div>{renderIcon(e.weather[0].main)}</div></WeatherItem>)).slice(8, 11)}
                </WeatherWrapper>
            </>
        )
    }
    if (loading) {
        return (<h1>Loading</h1>)
    } else {
        return (
            // tslint:disable-next-line: jsx-wrap-multiline
            <>
                <WeatherContainer>
                    {renderList(data)}
                </WeatherContainer>
            </>
        )
    }
}
