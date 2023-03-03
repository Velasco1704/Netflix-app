import { Link, useParams } from "react-router-dom";
import { Movie } from "@interfaces/Movie.interface";
import { HiOutlineArrowLeft } from "react-icons/hi";

export const Details = ({ movies }: { movies: Array<Movie> }) => {
  const { id } = useParams();
  const movieDetails = movies.find((movie) => movie.summary.id === Number(id));
  return (
    <div className="mx-4 h-[90vh] flex flex-col justify-center">
      <Link
        to="/"
        className="bg-white text-black flex items-center justify-center p-2 w-8 rounded-full"
      >
        <HiOutlineArrowLeft />
      </Link>
      <div className="flex flex-col gap-8">
        <div className="md:w-2/4 mx-auto">
          <img
            className="mx-auto"
            src={movieDetails?.jawSummary.logoImage.url}
            alt={movieDetails?.jawSummary.title}
          />
        </div>
        <div className="flex flex-col gap-4 md:w-3/4 xl:w-3/5 mx-auto">
          <div className="flex gap-4">
            <span className="p-2">{movieDetails?.jawSummary.releaseYear}</span>
            <span className="p-2 bg-white text-black rounded-full">
              {movieDetails?.jawSummary.delivery.quality}
            </span>
            {movieDetails?.jawSummary.delivery.hasHDR && (
              <span className="p-2 bg-white text-black rounded-full">HDR</span>
            )}
          </div>
          <div className="flex gap-3">
            {movieDetails?.jawSummary.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-bg rounded-md">
                {tag.name.toLowerCase()}
              </span>
            ))}
          </div>
          <p className="text-2xl">{movieDetails?.jawSummary.synopsisRegular}</p>
        </div>
      </div>
    </div>
  );
};
