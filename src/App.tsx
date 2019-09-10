import React from 'react';
import {ThemeProvider} from 'styled-components';
import {SPTheme} from "./utils/styles/SPTheme";

 
const App: React.FC = () => {
  return (
    <ThemeProvider theme={SPTheme}>
        <></>
    </ThemeProvider>
  );
}

export default App;
