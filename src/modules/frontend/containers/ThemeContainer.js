import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // your primary color
    },
    secondary: {
      main: "#f50057", // your secondary color
    },
    // Add more colors as needed
  },
});

const ThemeContainer = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContainer;
