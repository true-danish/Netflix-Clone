import MovieCard from "./MovieCard";

const SearchResult = ({ result }) => {
  return (
    <section className="max-container2">
      <div className="bg-black flex flex-wrap gap-8 items-center  justify-center ">
        {result.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            id={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
