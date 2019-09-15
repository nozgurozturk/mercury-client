import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from "styled-components";
import { API_KEY } from "../utils/config"
import axios from "axios";
import { Cloud, CloudRain, CloudLightRain, CloudLightning, CloudSnow, Sun } from 'styled-icons/boxicons-regular'
import moment from 'moment';

const WeatherContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:300px;
    text-align:right;
    color:${props => props.theme.colors.black};
`
const WeatherWrapper = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    list-style:none;

`
const WeatherItem = styled.li`
    font-weight : ${props => props.theme.fontWeight.normal};
    font-size:${props => props.theme.fontSize.body};
    font-family:${props => props.theme.fontFamily};
    margin-bottom:16px;
    flex-direction:row;
    align-items:flex-end;
`
const DayTitle = styled.h1`
    margin:0;
    margin-bottom:36px;
    padding:0;
    font-weight : ${props => props.theme.fontWeight.bold};
    font-size:${props => props.theme.fontSize.title};
    font-family:${props => props.theme.fontFamily};
`

export const Info: FunctionComponent = ({ }) => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<Boolean>(true);
    const [time, setTime] = useState<any>()

    const baseUrl: String = "https://api.openweathermap.org/data/2.5/forecast?id="

    useEffect(() => {
        (async (url: String) => {
            try {
                const response = await axios.get(`${url}745044&appid=${API_KEY}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(true);
            }
        })(baseUrl)
    }, [])

    useEffect(() => {
        setTime(moment().format('MMMM Do h:mm a'));
    }, [time])

    const renderIcon = (icon: String) => {

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
                        (<WeatherItem key={e.dt}>{(e.dt_txt).toString().slice(10, 16)}{"   "}{renderIcon(e.weather[0].main)}</WeatherItem>)).slice(0, 3)}
                </WeatherWrapper>
                <WeatherWrapper>
                    <DayTitle>Tomorrow</DayTitle>
                    {array.list.map((e: { dt: string | number | undefined; weather: { main: string }[]; dt_txt: string | number; }) =>
                        // tslint:disable-next-line: jsx-no-multiline-js
                        (<WeatherItem key={e.dt}>{(e.dt_txt).toString().slice(10, 16)}{"   "}{renderIcon(e.weather[0].main)}</WeatherItem>)).slice(8, 10)}
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
                    <DayTitle>{time.toString().toUpperCase()}</DayTitle>
                    {renderList(data)}
                </WeatherContainer>
            </>
        )
    }
}