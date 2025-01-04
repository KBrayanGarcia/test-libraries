import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1B264F',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#cfa616',
      contrastText: '#ffffff',
    },
    error: {
      main: '#8d2c38',
      contrastText: '#ffffff',
    },
    success: {
      main: '#006446',
      contrastText: '#ffffff',
    },
    background: {
      default: '#edeeff',
    },
    text: {
      primary: '#1B264F',
    },
  },
  components: {
    MuiTable: {
      variants: [
        {
          props: {},
          style: ({ theme }) => ({
            '& .MuiTableHead-root': {
              backgroundColor: theme.palette.primary.main,
              '& th': {
                color: theme.palette.primary.contrastText,
                fontWeight: 'bold',
              },
            },
            '& .MuiTableBody-root': {
              '& tr': {
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              },
            },
          }),
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
