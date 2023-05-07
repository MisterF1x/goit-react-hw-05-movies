import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    light: '#F1F6F9',
    accent: '#394867;',
    secondary: '#0b2d7c',
  },
  radii: {
    xs: '5px',
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
