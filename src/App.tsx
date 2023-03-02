import { useEffect } from "react";
import { NavBar } from "@components/NavBar";
import { Home } from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import { useContextMovies } from "@context/index";
import { ContextMovie } from "@interfaces/Context.interface";
import { Details } from "@pages/Details";
import { Movies } from "@pages/Movies";
import { Shows } from "@pages/Shows";

export const App = () => {
  const { allTypesOfMovies, getAllMovies } = useContextMovies() as ContextMovie;
  const { movies, allMovies, shows } = allTypesOfMovies;

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="relative">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home allMovies={allMovies} />}
        />
        <Route
          path="/movies"
          element={<Movies movies={movies} />}
        />
        <Route
          path="/shows"
          element={<Shows shows={shows} />}
        />
        <Route
          path="/movie-details/:id"
          element={<Details movies={allMovies} />}
        />
      </Routes>
    </div>
  );
};
