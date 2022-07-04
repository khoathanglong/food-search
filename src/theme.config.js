import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    warning: {
      main: "#f6ca3c",
    },
    error: {
      main: "#ec7373",
    },
    primary: {
      main: "#52aefa",
    },
    secondary: {
      main: "#8865f0",
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
