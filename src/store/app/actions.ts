import { Action } from "redux";

export enum AppTypes {
  TOGGLE_LOADING = "TOGGLE_LOADING",
  TOGGLE_STEP = "TOGGLE_STEP",
}

export interface ToggleStep extends Action {
  type: typeof AppTypes.TOGGLE_STEP;
}

export interface ToggleLoading extends Action {
  type: typeof AppTypes.TOGGLE_LOADING;
}

export type AppActions = ToggleLoading | ToggleStep;
