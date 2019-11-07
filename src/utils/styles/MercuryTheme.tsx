// my-theme.ts
import { DefaultTheme } from 'styled-components'

const MercuryLight: DefaultTheme ={
    colors: {
        main: "#101011",
        background: "#F0F0FF",
        gray200: '#E0E0EE',
        gray400: '#CACADD',
        gray600: '#606066',
        gray800: '#404044',
        alert : '#FF0C0C'
    }
}
const MercuryDark: DefaultTheme = {
    colors: {
        main: "#F0F0FF",
        background: "#101011",
        gray200: '#404044',
        gray400: '#606066',
        gray600: '#CACADD',
        gray800: '#E0E0EE',
        alert : '#FF0C0C'
      }
}

export {MercuryLight, MercuryDark}