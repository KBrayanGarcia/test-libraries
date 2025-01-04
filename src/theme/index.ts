import { VARS_THEME } from '@/vars/theme';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  palette: {
    mode: 'light',
    primary: {
      main: VARS_THEME.primary,
      contrastText: VARS_THEME.primaryTextContrast,
    },
    secondary: {
      main: VARS_THEME.secondary,
      contrastText: VARS_THEME.secondaryTextContrast,
    },
    error: {
      main: VARS_THEME.error,
      contrastText: VARS_THEME.errorTextContrast,
    },
    success: {
      main: VARS_THEME.success,
      contrastText: VARS_THEME.successTextContrast,
    },
    background: {
      default: VARS_THEME.background,
    },
    text: {
      primary: VARS_THEME.primary,
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
