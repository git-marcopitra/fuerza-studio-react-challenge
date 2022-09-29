import { Global, ThemeProvider } from '@emotion/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './design-system/global-styles';
import { MainTheme } from './design-system/themes';
import Router from './router';
import { setupServer } from './services/mirage/server';

if (process.env.NODE_ENV === 'development') setupServer();

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={MainTheme}>
      <Global styles={GlobalStyles} />
      <Router />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
