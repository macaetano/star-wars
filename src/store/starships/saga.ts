import { all, call, put, takeLatest } from "redux-saga/effects";

import { GetStarships } from "./actions";
import { toggleLoading } from "../app/action-creators";
import { getStarshipsSuccess } from "./action-creators";
import { StarshipsTypes } from "./actions";

function* getStarships({ payload: { page } }: GetStarships) {
  try {
    yield put(toggleLoading());
    // @ts-ignore current redux-saga limitation  info on: https://github.com/redux-saga/redux-saga/pull/2053
    const response = yield call(
      fetch,
      `https://swapi.dev/api/starships/?page=${page}`
    );
    yield put(getStarshipsSuccess(response));
  } catch (e) {
    // TODO: error handling
  } finally {
    yield put(toggleLoading());
  }
}

function* starshipsSaga() {
  yield all([takeLatest(StarshipsTypes.GET_STARSHIPS, getStarships)]);
}

export default starshipsSaga;
