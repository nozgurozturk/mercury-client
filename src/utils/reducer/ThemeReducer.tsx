import { DefaultTheme } from 'styled-components'
import { MercuryLight, MercuryDark } from "../styles/MercuryTheme"


type ThemeActionType = {
    type: 'DARK' | 'LIGHT'
}

export type IThemeState = {
    theme: DefaultTheme
}

export const initialThemeState: IThemeState = {
    theme: MercuryLight
}

export const ThemeReducer = (state: IThemeState, action: ThemeActionType) => {
    switch (action.type) {
        case 'DARK':
            return { ...state, theme: MercuryDark }
        case 'LIGHT':
            return { ...state, theme: MercuryLight }
        default:
            return state
    }
}