import { Action } from "redux";
import { Ship } from "./types";

export enum StarshipsTypes {
  GET_STARSHIPS = "GET_STARSHIPS",
  GET_STARSHIPS_SUCCESS = "GET_STARSHIPS_SUCCESS",
}

export interface GetStarships extends Action {
  type: typeof StarshipsTypes.GET_STARSHIPS;
  payload: {
    page: number;
  };
}

export interface GetStarshipsSuccess extends Action {
  type: typeof StarshipsTypes.GET_STARSHIPS_SUCCESS;
  payload: {
    ships: Ship[];
  };
}

export type StarshipActions = GetStarships | GetStarshipsSuccess;
