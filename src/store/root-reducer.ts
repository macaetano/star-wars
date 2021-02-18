import { combineReducers } from "redux";
import appReducers from "./app/reducers";
import starshipsReducers from "./starships/reducers";

const reducers = combineReducers({
  starships: starshipsReducers,
  app: appReducers,
});

export default reducers;
