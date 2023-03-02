import { getMoviesAPI } from "@api/index";
import { AllTypesOfMovies } from "@interfaces/AllTypesOfMovies.interface";
import { Movie } from "@interfaces/Movie.interface";
import { createContext, useContext, useState } from "react";

const Context = createContext({});

export const useContextMovies = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useTask must be used within a MoviesContextProvider");
  return context;
};

export const MoviesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allTypesOfMovies, setAllTypesOfMovies] = useState<AllTypesOfMovies>({
    movies: [],
    shows: [],
    allMovies: [],
  });
  const getAllMovies = async () =>
    await getMoviesAPI().then((res) =>
      setAllTypesOfMovies({
        allMovies: res.titles,
        shows: res.titles.filter(
          (movie: Movie) => movie.jawSummary.type === "show"
        ),
        movies: res.titles.filter(
          (movie: Movie) => movie.jawSummary.type === "movie"
        ),
      })
    );

  return (
    <Context.Provider
      value={{
        allTypesOfMovies,
        getAllMovies,
      }}
    >
      {children}
    </Context.Provider>
  );
};
