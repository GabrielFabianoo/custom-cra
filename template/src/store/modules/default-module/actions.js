import { DEFAULT_TYPE } from "./actionsType";

export const defaultAction = (defaultParam) => ({
  type: DEFAULT_TYPE,
  defaultParam,
});
