import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import '@fontsource/cairo/400.css';
import RouteApp from './routes/RouteApp';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', width: '100%' }}>
        <BrowserRouter>
            <RouteApp /> 
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
