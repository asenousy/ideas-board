import { combineReducers } from "redux";
import ideas from "./ideas";
import sortBy from "./sortBy";

export const reducer = combineReducers({
  ideas: ideas.reducer,
  sortBy: sortBy.reducer
});

export const actions = {
  ...ideas.actions,
  ...sortBy.actions
};

export { sortEnum } from "./sortBy";
