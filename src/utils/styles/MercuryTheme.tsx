// my-theme.ts
import { DefaultTheme } from 'styled-components'

const FontSizes  = {
  header: '26pt',
  body: '20pt',
  info : '14pt',
  tip : '8pt'
}

const MercuryLight: DefaultTheme ={
    colors: {
        main: "#101011",
        background: "#F0F0FF",
        gray200: '#E0E0EE',
        gray400: '#CACADD',
        gray600: '#606066',
        gray800: '#404044',
        alert : '#FF0C0C'
    },
    fontSize : FontSizes
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
      },
      fontSize : FontSizes
}

export {MercuryLight, MercuryDark}