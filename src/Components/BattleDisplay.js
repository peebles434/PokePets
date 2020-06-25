import React from "react";
import { observer } from "mobx-react";
import { PlayingCard } from "./PlayingCard";
import { BattleInfo } from "./BattleInfo";
import { importedCards } from "../PlayingCards/importedCards";

export const BattleDisplay = observer(() => {
  return (
    <div className="battleContainer">
      <BattleInfo />
      <PlayingCard card={importedCards[0]} />
      <PlayingCard card={importedCards[10]} />
      <BattleInfo />
    </div>
  );
});
