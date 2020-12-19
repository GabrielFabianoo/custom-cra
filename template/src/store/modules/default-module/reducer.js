import { DEFAULT_TYPE } from "./actionsType";

const defaultReducer = (state = [], action) => {
  switch (action.type) {
    case DEFAULT_TYPE:
      const { defaultParam } = action;
      return defaultParam;
    default:
      return state;
  }
};

export default defaultReducer;
