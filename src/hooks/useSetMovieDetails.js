import { useEffect } from "react";
import { movieApiOptions } from "../utils/constants";
import {
  addMovie,
  addMovieList,
  addPoster,
  addTrailer,
} from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const fetchMoviePoster = async (movie, dispatch) => {
  try {
    const responseObj = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie?.id + "/images",
      movieApiOptions
    );
    const data = await responseObj.json();
    const poster = data?.backdrops?.[0]?.["file_path"];
    dispatch(addPoster(poster));
  } catch (err) {
    console.log(err);
  }
};

const fetchMovieTrailer = async (movie, dispatch) => {
  try {
    const responseObj = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie?.id +
        "/videos?language=en-US",
      movieApiOptions
    );
    const data = await responseObj.json();
    // console.log(data);
    const trailerArray = data.results.filter((e) => e.type === "Trailer");

    const trailer = trailerArray[0];
    dispatch(addTrailer(trailer));
  } catch (err) {
    console.log(err);
  }
};

const useSetMovieDetails = () => {
  const dispatch = useDispatch();

  const getMoviesDetails = async () => {
    const moviesDetailsResponse = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      movieApiOptions
    );

    const moviesDetails = await moviesDetailsResponse.json();

    const movie = moviesDetails.results[Math.floor(Math.random() * 20)];
    //   console.log(movie);
    dispatch(addMovie(movie));
    dispatch(
      addMovieList({
        title: "nowPlayingMovies",
        data: moviesDetails.results,
      })
    );

    // fetch trailer

    fetchMovieTrailer(movie, dispatch);

    // fetch Poster

    fetchMoviePoster(movie, dispatch);
  };

  useEffect(() => {
    getMoviesDetails();
    // eslint-disable-next-line
  }, []);
};

export default useSetMovieDetails;
