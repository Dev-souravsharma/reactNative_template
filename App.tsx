import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import Main from './src/main';
import theme from './src/theme';

function App(): JSX.Element {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
