import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    mode: 'light',
  },
});

theme = responsiveFontSizes(theme);

export { theme };
