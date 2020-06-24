import { types } from "mobx-state-tree";
import { ATTACK_MODEL } from "../../constants";

export const JobModel = types
  .model(ATTACK_MODEL, {
    name: types.string,
    dmg: types.number,
    details: types.maybeNull(types.string),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
