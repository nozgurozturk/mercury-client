import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SPTheme } from "./utils/styles/SPTheme";

import { Title } from './components/Title';
import { List } from './components/List';
import { AddButton } from './components/AddButton';

const AppContainer = styled.main`
    max-width:960px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

const InnerContainer = styled.section` 
    display:flex; 
    flex-direction:column;
    justify-content:space-between;
`;

const PGContainer = styled.div`
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
        <></>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
