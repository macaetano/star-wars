export interface APIShip {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
}

export interface Ship extends APIShip {
  MGLTPerStop: number | "unknown";
}

export type Page = { [key: number]: Ship[] };

export type NextPage = null | number;
export interface StarshipsState {
  pages?: Page;
  nextPage: NextPage;
}
