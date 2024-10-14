import { click } from "@testing-library/user-event/dist/click";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieDes = () => {
  const movie = useSelector((store) => store.movies.movie);
  // const moviePoster = useSelector((store) => store.movies.poster);
  // console.log("movieDes");
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/browse/movie/" + movie.id, { state: { movie: movie } });
  };
  return (
    <div className="text-white inset-0 bg-black/20 absolute pl-14 flex justify-center -mt-8  md:justify-center items-start  flex-col ">
      <div className="pt-48">
        <h1 className=" text-3xl md:text-4xl my-4 font-bold">
          {movie?.["original_title"]}
        </h1>
        {/* <img
        src={"https://image.tmdb.org/t/p/original" + moviePoster}
        alt=""
        className="rounded-full overflow-hidden aspect-square w-32"
      /> */}

        <p className="w-full max-w-sm my-4 ">
          {movie?.overview.substring(0, 150)}
          <span onClick={clickHandler} className="font- cursor-pointer">
            ...more
          </span>
        </p>
        <div className="flex gap-4 flex-wrap lg:text-xl ">
          <button
            onClick={clickHandler}
            className="bg-white text-black hover:bg-slate-300 rounded-md py-3 px-8 max-sm:p-2 flex items-center  gap-3"
          >
            <i className="fa-solid fa-play"></i>
            Play
          </button>
          <button
            onClick={clickHandler}
            className="bg-slate-800 hover:bg-slate-600 rounded-md py-3 px-8 max-sm:p-2 flex gap-2 items-center"
          >
            <i className="fa-solid fa-circle-info"></i>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDes;
