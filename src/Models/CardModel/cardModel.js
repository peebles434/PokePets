import { types } from "mobx-state-tree";
import { attackModel } from "./AttackModel/attackModel";
import { CARD_MODEL } from "../constants";

export const JobModel = types
  .model(CARD_MODEL, {
    id: types.identifier,
    name: types.string,
    image: types.string,
    hp: types.string,
    attack1: types.model(attackModel),
    attack2: types.model(attackModel),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
