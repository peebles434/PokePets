import React from "react";
import { observer } from "mobx-react";
import { Bench } from "./Bench";
import { BattleDisplay } from "./BattleDisplay";

export const GameDisplay = observer(() => {
  return (
    <div>
      <Bench opponentBench={true} />
      <BattleDisplay />
      <Bench />
    </div>
  );
});
