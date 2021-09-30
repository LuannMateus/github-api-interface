import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

import { GlobalStyle } from './common/styles/global';
import { theme } from './common/styles/theme';
import { RepositoryProvider } from './providers/repositoryProvider';
import { UserProvider } from './providers/userProvider';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <RepositoryProvider>
          <App />
        </RepositoryProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
