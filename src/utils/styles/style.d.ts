// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      red: string
    }
    fontSize : {
      title : string
      body : string
      info : string
    }
    fontWeight : {
      bold : string
      normal : string
      light : string
    }
    border : {
        bold : string
        normal : string
    }
    shadow : {
        big : string
        normal : string
        pressed : string
    }
    fontFamily : string
  }
}