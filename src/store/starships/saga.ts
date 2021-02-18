import { all, call, put, takeLatest } from "redux-saga/effects";

import { GetStarships } from "./actions";
import { toggleLoading, toggleStep } from "../app/action-creators";
import { getStarshipsSuccess } from "./action-creators";
import { StarshipsTypes } from "./actions";
import { APIShip, Ship } from "./types";

function* getStarships({ payload: { page } }: GetStarships) {
  try {
    yield put(toggleLoading());
    // @ts-ignore current redux-saga limitation  info on: https://github.com/redux-saga/redux-saga/pull/2053
    const response = yield call(
      fetch,
      `https://swapi.dev/api/starships/?page=${page}`
    );
    // @ts-ignore current redux-saga limitation  info on: https://github.com/redux-saga/redux-saga/pull/2053
    const payload = yield response.json();
    const list: Ship[] = payload.results.map((apiShip: APIShip) => ({
      ...apiShip,
      stops: 50,
      imageURL:
        "https://cdn.shopify.com/s/files/1/0340/2849/products/Disc-StarWars-DeathStar_651a2d63-1b09-4d53-b69d-09b2feeae155_810x.jpg?v=1582135686",
    }));
    yield put(getStarshipsSuccess(list));
    yield put(toggleStep());
  } catch (e) {
    console.log(e);
  } finally {
    yield put(toggleLoading());
  }
}

function* starshipsSaga() {
  yield all([takeLatest(StarshipsTypes.GET_STARSHIPS, getStarships)]);
}

export default starshipsSaga;
