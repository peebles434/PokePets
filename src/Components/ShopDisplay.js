import React from "react";
import { observer } from "mobx-react";
import { Button } from "@material-ui/core";

export const ShopDisplay = observer(() => {
  return (
    <div>
      <div className="shopOptions">
        <div className="shopButtonDivs">
          <Button
            className="shopButtons brzShopButton"
            variant="contained"
            size="large"
          >
            Buy Bronze Pack
          </Button>
        </div>
        <div className="shopButtonDivs">
          <Button
            className="shopButtons silShopButton"
            variant="contained"
            size="large"
          >
            Buy Silver Pack
          </Button>
        </div>
        <div className="shopButtonDivs">
          <Button
            className="shopButtons gldShopButton"
            variant="contained"
            size="large"
          >
            Buy Gold Pack
          </Button>
        </div>
      </div>
    </div>
  );
});
