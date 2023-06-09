import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#14213d",
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: "#e71d36",
    },
    info: {
      main: "#fca311",
    },
  },
});

export default theme;
