import { combineReducers } from "redux";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";

export const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});
