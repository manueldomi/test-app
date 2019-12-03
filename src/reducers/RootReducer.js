import { combineReducers } from "redux";
import clients from "./clients";
import venues from "./venues";
const rootReducer = combineReducers({
  clients,
  venues
});

export default rootReducer;
