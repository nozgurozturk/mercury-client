import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SPTheme } from "./utils/styles/SPTheme";

import { Projects } from './components/Projects';
import { Pages } from './components/Pages';
import { Guides } from './components/Guides';
import { Info } from './components/Info';

const AppContainer = styled.main`
    margin:24px auto;
    max-width:960px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;
const ContentWrapper = styled.div`
    max-width:630px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`;
const PGWrapper = styled.div`
    width:100%;
    margin-bottom:120px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`


const App: React.FC = () => {
  return (
    <ThemeProvider theme={SPTheme}>
      <AppContainer>
        <ContentWrapper>
          <PGWrapper>
            <Projects />
            <Guides />
          </PGWrapper>
          <Pages />
        </ContentWrapper>
        <Info />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
