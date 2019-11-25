import React, { useReducer, useEffect } from 'react';
import { ThemeProvider, createGlobalStyle} from 'styled-components';
// Utilities
import { AuthContext } from './utils/context/AuthContext'
import { AuthReducer, initialAuthState } from './utils/reducer/AuthReducer'
import {ThemeContext} from './utils/context/ThemeContext'
import {ThemeReducer, initialThemeState} from './utils/reducer/ThemeReducer'
import {WorkSpaceContext} from './utils/context/WorkSpaceContext'
import { WorkSpaceReducer, initialWSState } from './utils/reducer/WorkspaceReducer';
// Containers and Components
import { Login } from "./containers/Auth/Login"
import {Home} from './containers/Home'


// Global Style

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: RoobertBold;
    src: url("/assets/fonts/Roobert-Bold.woff");
    font-style:normal;
  }
  @font-face {
    font-family: RoobertBold;
    src: url("/assets/fonts/Roobert-BoldItalic.woff");
    font-style:italic;
  }
  @font-face {
    font-family: RoobertRegular;
    src: url("/assets/fonts/Roobert-Regular.woff");
    font-style:normal;
  }
  @font-face {
    font-family: RoobertRegular;
    src: url("/assets/fonts/Roobert-RegularItalic.woff");
    font-style:italic;
  }
  @font-face {
    font-family: RoobertLight;
    src: url("/assets/fonts/Roobert-Light.woff");
    font-style:normal;
  }
  @font-face {
    font-family: RoobertLight;
    src: url("/assets/fonts/Roobert-LightItalic.woff");
    font-style:italic;
  }
  body {
    background-color: ${props => props.theme.colors.background};
    font-family:RoobertLight;
    box-sizing:border-box;
    margin:0;
    padding:0;
  }
  h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
  }
  ul,li{
    margin:0;
    padding:0;
    list-style:none;
  }
  
`

const App: React.FC = () => {
  
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);
  const [theme, themeDispatch] = useReducer(ThemeReducer, initialThemeState)
  const [workspace, workspaceDispatch] = useReducer(WorkSpaceReducer, initialWSState)
  useEffect(() => {

    //Checking local storage for user is exist
    if (localStorage.getItem('user')) {
      dispatch({ type: 'LOGIN' })
    }
  
  }, [])

  return (
    <ThemeContext.Provider value={{theme, themeDispatch}}>
      <ThemeProvider theme={theme.theme}>
        <AuthContext.Provider value={{ state, dispatch }}>
          <>{!state.authenticated ? <Login /> : 
          <WorkSpaceContext.Provider value={{ state, dispatch }}>
            <Home/>
          </WorkSpaceContext.Provider>
          
          }</>
          <GlobalStyle/>
        </AuthContext.Provider >
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
