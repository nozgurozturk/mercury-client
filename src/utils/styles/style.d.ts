
import 'styled-components'


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      background: string
      gray200:string
      gray400:string
      gray600:string
      gray800:string
      alert: string
    }
  }
}