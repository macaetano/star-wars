import { bindActionCreators } from "redux";
import { StarshipsTypes, StarshipActions } from "./actions";
import { StarshipsState } from "./types";

const INITIAL_STATE: StarshipsState = {
  pages: undefined,
  nextPage: 2,
};

const reducers = (
  state = INITIAL_STATE,
  action: StarshipActions
): StarshipsState => {
  switch (action.type) {
    case StarshipsTypes.GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        nextPage: action.payload.nextPage,
        pages: {
          ...state.pages,
          [action.payload.page]: action.payload.ships,
        },
      };
    default:
      return state;
  }
};

export default reducers;
