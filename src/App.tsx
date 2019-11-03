import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { MercuryLight, MercuryDark } from "./utils/styles/MercuryTheme";


const App: React.FC = () => {
  return (
    <ThemeProvider theme={MercuryLight}>
      <div>Mercury-Client</div>
    </ThemeProvider>
  );
}

export default App;
