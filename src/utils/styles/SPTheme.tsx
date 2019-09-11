// my-theme.ts
import { DefaultTheme } from 'styled-components'

const SPTheme: DefaultTheme = {
    colors: {
        black: "#2B3039",
        white: "#F4F4F4",
        red: "#FF5847"
      },
      fontSize : {
        title : "36px",
        body : "24px",
        info : "18px"
      },
      fontWeight : {
        bold : "700",
        normal : "600",
        light : "400",
      },
      border : {
          bold : "4px solid #2B3039",
          normal : "2px solid #2B3039 "
      },
      shadow : {
          big : "8px 8px 0px #2B3039",
          normal : "4px 4px 0px #2B3039",
          pressed : "2px 2px 0px #2B3039"
      },
      fontFamily : "futura-pt, sans-serif"
}

export {SPTheme}