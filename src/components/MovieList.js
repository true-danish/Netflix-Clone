import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  const divRef = useRef(null);

  return (
    <section>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl pb-4">{title}</h1>
          <div className="flex gap-2  ">
            <button
              onClick={() => divRef.current.scrollBy(-300, 0)}
              className="bg-slate-800 text-white   p-3 hover:bg-slate-500 rounded-full"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              onClick={() => divRef.current.scrollBy(300, 0)}
              className="bg-slate-800 text-white   p-3 hover:bg-slate-500 rounded-full"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div
          className=" flex gap-4 w-full overflow-x-scroll myscroll"
          ref={divRef}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
