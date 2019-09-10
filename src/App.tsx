import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SPTheme } from "./utils/styles/SPTheme";

import { Title } from './components/Title';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={SPTheme}>
      <div>
        <Title title="projects" />
        <Title title="guide and rules" />
      </div>
    </ThemeProvider>
  );
}

export default App;
