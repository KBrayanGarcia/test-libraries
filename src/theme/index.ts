import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1B264F',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#88752e',
      contrastText: '#ffffff',
    },
    error: {
      main: '#882e41',
      contrastText: '#ffffff',
    },
    success: {
      main: '#41882e',
      contrastText: '#ffffff',
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
