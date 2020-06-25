import React from "react";
import { observer } from "mobx-react";
import { Header } from "./Header";
import { Bench } from "./Bench";
import { BattleDisplay } from "./BattleDisplay";

export const GameDisplay = observer(() => {
  return (
    <div>
      <Header />
      <Bench opponentBench={true} />
      <BattleDisplay />
      <Bench />
    </div>
  );
});
