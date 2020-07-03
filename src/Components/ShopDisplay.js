import React from "react";
import { observer } from "mobx-react";
import { Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { amber, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[800],
    },
    secondary: {
      main: grey[400],
    },
    status: {
      danger: amber[500],
    },
  },
});

export const ShopDisplay = observer(() => {
  return (
    <ThemeProvider theme={theme}>
      <div className="shopOptions">
        <div className="shopButtonDivs">
          <Button
            className="shopButtons"
            color="primary"
            variant="contained"
            size="large"
          >
            Buy Bronze Pack
          </Button>
        </div>
        <div className="shopButtonDivs">
          <Button
            className="shopButtons"
            color="secondary"
            variant="contained"
            size="large"
          >
            Buy Silver Pack
          </Button>
        </div>
        <div className="shopButtonDivs">
          <Button
            className="shopButtons"
            color="status"
            variant="contained"
            size="large"
          >
            Buy Gold Pack
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
});
