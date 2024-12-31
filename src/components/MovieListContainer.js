import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movies.movieList);
  // console.log(movies);

  if (Object.keys(movies).length === 0) return;
  return (
    <section className="max-container p-8">
      <div className="-mt-40 max-sm:-mt-32 z-50 relative">
        {movies.nowPlayingMovies && (
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        )}
        {movies.popularMovies && (
          <MovieList title="Popular Movies" movies={movies.popularMovies} />
        )}
        {movies.topRatedMovies && (
          <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        )}
        {movies.upcomingMovies && (
          <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
        )}
      </div>
    </section>
  );
};

export default MovieListContainer;
