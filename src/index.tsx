import { Global, ThemeProvider } from '@emotion/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './context/user';
import GlobalStyles from './design-system/global-styles';
import { MainTheme } from './design-system/themes';
import Router from './router';
import { setupServer } from './services/mirage/server';

if (process.env.NODE_ENV === 'development') setupServer();

ReactDOM.render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider theme={MainTheme}>
        <Global styles={GlobalStyles} />
        <Toaster position="top-center" reverseOrder={false} />
        <Router />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
  document.getElementById('root')
);
