import { AppTypes, AppActions } from "./actions";
import { AppState } from "./types";

const INITIAL_STATE: AppState = {
  isLoading: false,
};

const reducers = (state = INITIAL_STATE, action: AppActions): AppState => {
  switch (action.type) {
    case AppTypes.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

export default reducers;
