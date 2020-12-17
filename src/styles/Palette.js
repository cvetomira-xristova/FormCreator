import { createMuiTheme } from "@material-ui/core/styles";

let palette = createMuiTheme({
  palette: {
    primary: {
      main: "#5858AB",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
      h3: {
       fontSize: 42,
      },
      h5: {
        fontSize: 26,
       },
  },
});

export default palette;
