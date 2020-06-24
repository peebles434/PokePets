import { types } from "mobx-state-tree";
import { CARD_STORE } from "../constants";
import { CardModel } from "../../Models/CardModel/cardModel";

export const CardStore = types
  .model(CARD_STORE, {
    jobMap: types.map(CardModel),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
