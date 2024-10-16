import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  const divRef = useRef(null);

  return (
    <section>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl pb-4">{title}</h1>
          <div className="flex gap-2  ">
            <button
              onClick={() => divRef.current.scrollBy(-300, 0)}
              className="bg-white text-black   p-3 hover:bg-slate-500 rounded-full"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              onClick={() => divRef.current.scrollBy(300, 0)}
              className="bg-white text-black   p-3 hover:bg-slate-500 rounded-full"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div
          className=" flex gap-8 max-sm:gap-4 w-full overflow-x-scroll myscroll [prespective:1000px]"
          ref={divRef}
        >
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              id={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
