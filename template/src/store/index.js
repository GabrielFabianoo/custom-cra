import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import defaultReducer from "./modules/default-module/reducer";

const reducers = combineReducers({
  state: defaultReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
