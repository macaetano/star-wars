import { AppTypes, AppActions } from "./actions";
import { AppState } from "./types";

const INITIAL_STATE: AppState = {
  isLoading: false,
  step: "form",
};

const reducers = (state = INITIAL_STATE, action: AppActions): AppState => {
  switch (action.type) {
    case AppTypes.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case AppTypes.TOGGLE_STEP:
      return {
        ...state,
        step: state.step === "form" ? "list" : "form",
      };
    default:
      return state;
  }
};

export default reducers;
