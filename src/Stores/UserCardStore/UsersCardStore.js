import { types } from "mobx-state-tree";
import { USER_CARD_STORE } from "../constants";
import { CardModel } from "../../Models/CardModel/cardModel";

export const UserCardStore = types
  .model(USER_CARD_STORE, {
    userCardMap: types.map(CardModel),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
