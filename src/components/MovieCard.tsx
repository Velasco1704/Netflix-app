import { useNavigate } from "react-router-dom";

export const MovieCard = ({
  id,
  title,
  image,
}: {
  id: number;
  title: string;
  image: string;
}) => {
  const navigate = useNavigate();
  return (
    <img
      className="border-2 rounded-lg p-4 bg-black cursor-pointer lg:hover:scale-110 transition-all"
      onClick={() => navigate(`/movie-details/${id}`)}
      src={image}
      alt={title}
    />
  );
};
