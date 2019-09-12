import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SPTheme } from "./utils/styles/SPTheme";

import { Projects } from './components/Projects';
import { Pages } from './components/Pages';
import { Guides } from './components/Guides';

const AppContainer = styled.main`
    margin:60px auto;
    max-width:960px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const PGContainer = styled.div`
    width:630px;
    margin-bottom:120px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
const App: React.FC = () => {
  return (
    <ThemeProvider theme={SPTheme}>
      <AppContainer>
        <PGContainer>
          <Projects />
          <Guides />
        </PGContainer>
          <Pages/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
