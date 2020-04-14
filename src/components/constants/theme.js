import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
      light: '#b7c0eb'
    },
    secondary: {
      main: "#11cb5f",
      light: '#9aedbd'
    },
  },
  typography: {
    h1: {
      fontSize: 30, 
    },
    subtitle1: {
      fontSize: 22,
    },
    subtitle2: {
      fontSize: 12,
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

export default theme;