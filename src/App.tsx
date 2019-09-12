import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SPTheme } from "./utils/styles/SPTheme";

import { Projects } from './components/Projects';
import { List } from './components/List';
import { AddButton } from './components/AddButton';

const AppContainer = styled.main`
    margin:0 auto;
    max-width:960px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;



const PGContainer = styled.div`
    width:630px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

`

const LinksContainer = styled.div`
    display:flex; 
    flex-direction:column;
    justify-content:space-between;
    flex-wrap:wrap;

`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={SPTheme}>
      <AppContainer>
        <PGContainer>
          <Projects />
          <Projects />
        </PGContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
