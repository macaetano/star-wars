import { Action } from "redux";
import { NextPage, Ship } from "./types";

export enum StarshipsTypes {
  GET_STARSHIPS = "GET_STARSHIPS",
  GET_STARSHIPS_SUCCESS = "GET_STARSHIPS_SUCCESS",
}

export interface GetStarships extends Action {
  type: typeof StarshipsTypes.GET_STARSHIPS;
  payload: {
    page: number;
    isToggleStep: boolean;
  };
}

export interface GetStarshipsSuccess extends Action {
  type: typeof StarshipsTypes.GET_STARSHIPS_SUCCESS;
  payload: {
    ships: Ship[];
    page: number;
    nextPage: NextPage;
  };
}

export type StarshipActions = GetStarships | GetStarshipsSuccess;
