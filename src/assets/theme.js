import { createTheme } from "@mui/material/styles";
import { pink, deepOrange, red } from "@mui/material/colors";

const primaryColor = pink[900];
const secondaryColor = deepOrange[500];
const dangerColor = red[900];

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        secondary: {
          "&:hover": {
            color: "purple",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
        },
      },
    },
  },
});

export default theme;
