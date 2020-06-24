import React from "react";
import { observer } from "mobx-react";
import { PokePetsApp } from "./Components/PokePetsApp";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import "./App.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = observer(() => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <PokePetsApp />
    </ThemeProvider>
  );
});

export default App;
