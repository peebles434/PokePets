import { types } from "mobx-state-tree";
import { SHOP_CARD_STORE } from "../constants";
import { CardModel } from "../../Models/CardModel/cardModel";

export const ShopCardStore = types
  .model(SHOP_CARD_STORE, {
    shopCardMapAll: types.map(CardModel),
    shopCardMapOption1: types.map(CardModel),
    shopCardMapOption2: types.map(CardModel),
    shopCardMapOption3: types.map(CardModel),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
