import { AppState } from "./app/types";
import { StarshipsState } from "./starships/types";

export interface StoreState {
  starships: StarshipsState;
  app: AppState;
}
