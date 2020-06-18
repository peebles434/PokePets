import React from "react";
import { PokePetsApp } from "./Components/PokePetsApp";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import "./App.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <PokePetsApp />
    </ThemeProvider>
  );
}

export default App;
