import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F6F52",
    },
    secondary: {
      main: "#f50057",
    },
    white: {
      main: "#ffffff",
    },
    background: {
      main: "rgba(200, 234, 180, 0.7)",
      light: "rgba(200, 234, 180, 0.3)",
    },
  },
});

const ThemeContainer = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContainer;
