import React from 'react'
import {IThemeState} from '../reducer/ThemeReducer'

type AppContextProps = {
    theme: IThemeState
    themeDispatch: ({type}:{type:any}) => void;
}

export const ThemeContext = React.createContext({} as AppContextProps)