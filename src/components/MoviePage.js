import { useLocation } from "react-router-dom";
import { IMG_CDN, movieApiOptions } from "../utils/constants";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const MoviePage = () => {
  const movie = useLocation()?.state?.movie;
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("");
  const [related, setRelated] = useState(null);
  console.log(related);

  useEffect(() => {
    const fetchVideo = async () => {
      let data;

      const resObj = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movie?.id +
          "/videos?language=en-US",
        movieApiOptions
      );
      data = await resObj.json();
      // console.log(data);
      if (data?.results?.length === 0 || data?.success === false) {
        const resObj2 = await fetch(
          "https://api.themoviedb.org/3/tv/" +
            movie.id +
            "/videos?language=en-US",
          movieApiOptions
        );
        data = await resObj2.json();
        // console.log(data);

        if (data?.results?.length === 0 || data?.success === false) {
          data = [];
        }
      }

      // console.log(data);
      const fileterData = data?.results?.filter(
        (ele) => ele?.type === "Trailer"
      );

      if (fileterData?.length === 0) fileterData[0] = data?.results?.[0];
      if (fileterData) setKey(fileterData[0]?.key);
      // console.log(fileterData);
    };

    const fetchRelated = async () => {
      const resObj = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movie.id +
          "/similar?language=en-US&page=1",
        movieApiOptions
      );

      let data = await resObj.json();
      console.log(data);

      if (data?.results?.length === 0 || data?.success === false) {
        const resObj = await fetch(
          "https://api.themoviedb.org/3/tv/" +
            movie.id +
            "/similar?language=en-US&page=1",
          movieApiOptions
        );
        data = await resObj.json();
        console.log(data);

        if (data?.results?.length === 0 || data?.success === false) {
          data = [];
        }
      }
      setRelated(data.results);
    };

    fetchVideo();
    fetchRelated();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="relative">
      <div className={` min-h-screen  overflow-hidden relative `}>
        <img
          src={IMG_CDN + movie?.backdrop_path}
          alt=""
          className=" object-cover h-screen w-full  "
        />
        <div className="absolute bottom-12 left-12 max-sm:left-8  bg-black/30 mx-4">
          <h1 className="text-5xl max-sm:text-3xl font-bold">{movie?.title}</h1>
          <p className="w-full max-w-2xl my-4">{movie?.overview}</p>
          <p className="font-bold flex flex-wrap gap-4">
            <span> IMDB {movie?.["vote_average"]}</span>
            <span> {movie?.["release_date"]?.substring(0, 4)}</span>
            <span>U/A {movie?.adult ? "18+" : "13+"}</span>
          </p>
          <h2
            onClick={() => setShow(true)}
            className="text-3xl font-bold  my-4 bg-slate-800 text-white w-full md:max-w-72 p-2 text-center  rounded-full cursor-pointer"
          >
            Watch Now
          </h2>
        </div>
      </div>
      {show && (
        <div className=" flex flex-col absolute inset-0 top-24 ">
          <button
            onClick={() => setShow(false)}
            className="text-5xl bg-slate-700 p-2 rounded-md "
          >
            Close
          </button>
          <iframe
            className="w-full h-screen"
            src={"https://www.youtube.com/embed/" + key}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="">
        {related && <MovieList title={"Related movies"} movies={related} />}
      </div>
    </div>
  );
};

export default MoviePage;
