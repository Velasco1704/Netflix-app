import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MovieCard } from "@components/MovieCard";
import { Movie } from "@interfaces/Movie.interface";

export const Home = ({ allMovies }: { allMovies: Array<Movie> }) => {
  if (allMovies.length === 0) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        <AiOutlineLoading3Quarters className="animate-spin text-6xl" />
      </div>
    );
  }
  return (
    <div className="w-full mt-28 flex flex-col gap-6">
      <h1 className="text-4xl mx-8">HOME</h1>
      <div className="bg-gray-bg p-4 mx-4 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {allMovies.map((movie) => (
          <MovieCard
            key={movie.summary.id}
            id={movie.summary.id}
            title={movie.jawSummary.title}
            image={movie.jawSummary.logoImage.url}
          />
        ))}
      </div>
    </div>
  );
};
