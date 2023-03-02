import { AllTypesOfMovies } from "./AllTypesOfMovies.interface";

export interface ContextMovie {
  allTypesOfMovies: AllTypesOfMovies;
  setAllTypesOfMovies: (value: AllTypesOfMovies) => void;
  getAllMovies: () => Promise<void>;
}
