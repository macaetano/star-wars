import { AppTypes, AppActions } from "./actions";

export const toggleLoading = (): AppActions => ({
  type: AppTypes.TOGGLE_LOADING,
});

export const toggleStep = (): AppActions => ({
  type: AppTypes.TOGGLE_STEP,
});
