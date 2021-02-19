import { NextPage, Ship } from "./types";
import { StarshipsTypes, StarshipActions } from "./actions";

export const getStarships = (
  page: number,
  isToggleStep = true
): StarshipActions => ({
  type: StarshipsTypes.GET_STARSHIPS,
  payload: {
    page,
    isToggleStep,
  },
});

export const getStarshipsSuccess = (
  ships: Ship[],
  page: number,
  nextPage: NextPage
): StarshipActions => ({
  type: StarshipsTypes.GET_STARSHIPS_SUCCESS,
  payload: {
    ships,
    page,
    nextPage,
  },
});
