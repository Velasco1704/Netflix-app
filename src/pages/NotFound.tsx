import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-10">
      <h1 className="text-center text-7xl">
        404 <br /> Not Found
      </h1>
      <button className="px-8 py-6 bg-gray-bg rounded-md border-2 border-transparent lg:hover:scale-110 transition-all lg:hover:border-white ">
        <Link to="/">Return to Home</Link>
      </button>
    </div>
  );
};
