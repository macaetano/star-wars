import { Action } from "redux";

export enum AppTypes {
  TOGGLE_LOADING = "TOGGLE_LOADING",
}

export interface ToggleLoading extends Action {
  type: typeof AppTypes.TOGGLE_LOADING;
}

export type AppActions = ToggleLoading;
