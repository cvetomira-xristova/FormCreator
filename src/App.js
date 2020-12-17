import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { ThemeProvider } from "@material-ui/core/styles";
import palette from './styles/Palette';

function App() {
  return (
    <ThemeProvider theme={palette}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
