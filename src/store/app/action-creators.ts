import { AppTypes, AppActions } from "./actions";

export const toggleLoading = (): AppActions => ({
  type: AppTypes.TOGGLE_LOADING,
});
