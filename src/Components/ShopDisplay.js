import React from "react";
import { observer } from "mobx-react";
import { PlayingCardBack } from "./PlayingCardBack";

export const ShopDisplay = observer(() => {
  return (
    <div>
      <div className="shopOptions">
        <PlayingCardBack />
        <PlayingCardBack />
        <PlayingCardBack />
      </div>
    </div>
  );
});
