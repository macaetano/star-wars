import { all } from "@redux-saga/core/effects";
import starshipsSaga from "./starships/saga";

function* rootSaga() {
  yield all([starshipsSaga()]);
}

export default rootSaga;
