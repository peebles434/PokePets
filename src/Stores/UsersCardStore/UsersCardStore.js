import { types } from "mobx-state-tree";
import { USERS_CARD_STORE } from "../constants";
import { CardModel } from "../../Models/CardModel/cardModel";

export const UsersCardStore = types
  .model(USERS_CARD_STORE, {
    usersCardMap: types.map(CardModel),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
