import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "rgb(246, 244, 243)",
    },
  },
  fonts: {
    primary: {
      fontFamily: "Gabarito, sans-serif",
    },
    secondary: {
      fontFamily: "Playfair Display, serif",
    },
  },
});

export default theme;
