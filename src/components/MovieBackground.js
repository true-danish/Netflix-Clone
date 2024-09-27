import { useDispatch, useSelector } from "react-redux";

const MovieBackground = () => {
  const trailer = useSelector((store) => store.movies.trailer);
  // const poster = useSelector((store) => store.movies.poster);
  // console.log(poster);
  return (
    <div className="h-screen">
      <div className="w-full h-full ">
        <iframe
          onClick={(e) => e.preventDefault()}
          className="w-full  h-1/2 aspect-square md:h-full "
          src={`https://www.youtube.com/embed/${trailer?.key}?si=mOHs4x9iNRcV8YZu&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=${trailer.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* <div className="h-3/4 bg-emerald-500">
        <img
          className="h-full object-cover "
          src={"https://image.tmdb.org/t/p/original" + poster}
          alt=""
        />
      </div> */}
    </div>
  );
};

export default MovieBackground;
