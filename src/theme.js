import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiFormControl: {
      root: {
        margin: "20px",
      },
    },
    MuiTypography: {
      colorTextPrimary: {
        color: "#fff",
      },
      colorTextSecondary: {
        color: "#000",
      },
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
  },

  palette: {
    primary: {
      light: "#8561c5",
      main: "#673ab7",
      dark: "#482880",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bb33ff",
      main: "#aa00ff",
      dark: "#7600b2",
      contrastText: "#fff",
    },
  },
});

export default theme;
