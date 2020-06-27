import { types } from "mobx-state-tree";
import { SHOP_CARD_STORE } from "../constants";
import { CardModel } from "../../Models/CardModel/cardModel";

export const ShopCardStore = types
  .model(SHOP_CARD_STORE, {
    shopCardMap1: types.map(CardModel),
    shopCardMap2: types.map(CardModel),
    shopCardMap3: types.map(CardModel),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
