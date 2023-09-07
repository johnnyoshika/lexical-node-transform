import { createTheme } from '@mui/material';

const font = "'Lexend', sans-serif";

const mediaQueryTheme = createTheme();

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#fa7930ff',
      contrastText: 'white',
    },
    background: {
      default: '#f8f8f8',
    },
  },
  typography: {
    fontFamily: font,
    h3: {
      [mediaQueryTheme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
    h4: {
      [mediaQueryTheme.breakpoints.down('sm')]: {
        fontSize: '1.75rem',
      },
    },
  },
});

export const editorTheme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'editor-placeholder',
  paragraph: 'editor-paragraph',
};
