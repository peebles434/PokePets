import React from "react";
import { PokePetsApp } from "./Components/PokePetsApp";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <PokePetsApp />
    </ThemeProvider>
  );
}

export default App;
