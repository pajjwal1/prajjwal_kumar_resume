import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6102',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
    orange: {
      main: '#FE9400',
      contrastText: '#fff',
    },
    white: {
      main: '#ffffff',
      contrastText: '#1A2644',
    },
    blue: {
      main: '#1A2644',
      contrastText: '#FFFFFF',
    },
    green: {
      main: '#4FD333',
      contrastText: '#C9F2C0',
    },
    red: {
      main: ' #A22027',
      contrastText: '#FFFFFF',
    },
    anchorTag: {
      main: '#1D1E17',
    },
    error: {
      main: '#B00020',
    },
  },
  typography: {
    color: '#1A2644',
    h1: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    },
    error: {
      color: '#B00020',
    },
  },
});

theme.components = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        marginBottom: '15px',
        color: 'black',
        '@media (prefers-color-scheme: dark)': {
          color: '#ffffff',
          borderColor: 'white',
      },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        marginBottom: '15px',
        '@media (prefers-color-scheme: dark)': {
          color: 'white',
      },
      },
      notchedOutline: {
        '@media (prefers-color-scheme: dark)': {
          borderColor: 'white',
      },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginBottom: '10px',
        marginTop: 'unset',
        marginLeft: 'unset',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        '@media (prefers-color-scheme: dark)': {
          color: 'white',
          fontSize: '16px',
      },
      },
    },
  },
  MuiLinearProgress:{
    styleOverrides: {
        bar: {
            backgroundColor: '#0bceaf'
        },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        '&.MuiDialog-paper': {
          backgroundColor: '#c9f2c0',
          },
        },
      },
    },
};

export default theme;
