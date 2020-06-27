import { types } from "mobx-state-tree";
import { BENCH_CARD_STORE } from "../constants";
import { CardModel } from "../../Models/CardModel/cardModel";

export const BenchCardStore = types
  .model(BENCH_CARD_STORE, {
    benchCardMap1: types.map(CardModel),
    benchCardMap2: types.map(CardModel),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
