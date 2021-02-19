import { all, call, put, takeLatest } from "redux-saga/effects";

import { GetStarships } from "./actions";
import { toggleLoading, toggleStep } from "../app/action-creators";
import { getStarshipsSuccess } from "./action-creators";
import { StarshipsTypes } from "./actions";
import { APIShip, Ship } from "./types";
import getMGLTPerStop from "../../utils/getMGLTPerStop";
import { API_URL } from "../../utils/constants";

function* getStarships({ payload: { page, isToggleStep } }: GetStarships) {
  try {
    yield put(toggleLoading());
    // @ts-ignore current redux-saga limitation  info on: https://github.com/redux-saga/redux-saga/pull/2053
    const response = yield call(fetch, `${API_URL}${page}`);
    // @ts-ignore current redux-saga limitation  info on: https://github.com/redux-saga/redux-saga/pull/2053
    const payload = yield response.json();
    const list: Ship[] = payload.results.map((apiShip: APIShip) => ({
      ...apiShip,
      MGLTPerStop: getMGLTPerStop(apiShip),
    }));
    const nextPage = payload.next
      ? Number(payload.next.slice(payload.next.length - 1))
      : null;
    yield put(getStarshipsSuccess(list, page, nextPage));
    if (isToggleStep) {
      yield put(toggleStep());
    }
  } catch (e) {
    alert(e);
  } finally {
    yield put(toggleLoading());
  }
}

function* starshipsSaga() {
  yield all([takeLatest(StarshipsTypes.GET_STARSHIPS, getStarships)]);
}

export default starshipsSaga;
