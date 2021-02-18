import { Ship } from "./types";
import { StarshipsTypes, StarshipActions } from "./actions";

export const getStarships = (page = 1): StarshipActions => ({
  type: StarshipsTypes.GET_STARSHIPS,
  payload: {
    page,
  },
});

export const getStarshipsSuccess = (ships: Ship[]): StarshipActions => ({
  type: StarshipsTypes.GET_STARSHIPS_SUCCESS,
  payload: {
    ships,
  },
});
