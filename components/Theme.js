import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryFont: "rgb(23, 10, 82)",
    backgroundColor: "rgb(250, 245, 245)",
  },
  fontSize: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xxlarge: "4rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
