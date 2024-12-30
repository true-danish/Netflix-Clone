import MovieDes from "./MovieDes";
import MovieBackground from "./MovieBackground";
import useSetMovieDetails from "../hooks/useSetMovieDetails";
import MovieListContainer from "./MovieListContainer";
import useMovieList from "../hooks/useMovieList";

const BrowseBody = () => {
  console.log("broseBody");
  const ball = document.querySelector(".ball");

  useSetMovieDetails();
  useMovieList();

  return (
    <section className="">
      <MovieDes />
      <MovieBackground />
      <MovieListContainer />
    </section>
  );
};

export default BrowseBody;
