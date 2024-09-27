import { useEffect } from "react";
import { movieApiOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieList } from "../utils/moviesSlice";

const useMovieList = () => {
  const dispatch = useDispatch();
  const fetchPopularMovies = async () => {
    const resObj = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      movieApiOptions
    );

    const data = await resObj.json();

    dispatch(
      addMovieList({
        title: "popularMovies",
        data: data.results,
      })
    );
  };

  const fetchTopRatedMovies = async () => {
    const resObj = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      movieApiOptions
    );

    const data = await resObj.json();

    dispatch(
      addMovieList({
        title: "topRatedMovies",
        data: data.results,
      })
    );
  };

  const fetchUpcomingMovies = async () => {
    const resObj = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      movieApiOptions
    );

    const data = await resObj.json();

    dispatch(
      addMovieList({
        title: "upcomingMovies",
        data: data.results,
      })
    );
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchUpcomingMovies();
  });
};

export default useMovieList;
