import { StarshipsTypes, StarshipActions } from "./actions";
import { StarshipsState } from "./types";

const INITIAL_STATE: StarshipsState = {
  ships: [],
};

const reducers = (
  state = INITIAL_STATE,
  action: StarshipActions
): StarshipsState => {
  switch (action.type) {
    case StarshipsTypes.GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        ships: [...state.ships, ...action.payload.ships],
      };
    default:
      return state;
  }
};

export default reducers;
