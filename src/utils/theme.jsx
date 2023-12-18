// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057', 
    },
    h1: {
      fontFamily: 'Cairo, sans-serif',
    },
    typography: {
      fontFamily: 'Cairo, sans-serif',
    },
  },
});

export default theme;
