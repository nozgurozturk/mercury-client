
import 'styled-components'


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      gray200:string
      gray400:string
      gray600:string
      gray800:string
    }
  }
}