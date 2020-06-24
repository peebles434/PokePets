import React from "react";
import { PlayingCard } from "./PlayingCard";
import { importedCards } from "../PlayingCards/importedCards";

export const PokePetsApp = () => {
  return (
    <div>
      <PlayingCard card={importedCards[1]} />
    </div>
  );
};
