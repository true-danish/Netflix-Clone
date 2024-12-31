import { Link } from "react-router-dom";
import { IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeGpt } from "../utils/gptSlice";

const MovieCard = ({ poster, title, id, movie }) => {
  // console.log(poster);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeGpt());
  };
  return (
    poster && (
      <Link
        to={"/browse/movie/" + id}
        state={{ movie: movie }}
        onClick={handleClick}
        className="moviecard "
      >
        <div className=" w-44 max-sm:w-28  aspect-[2/3]  shrink-0 cursor-pointer  hover:outline-1 outline outline-white outline-0  transition-all">
          <img src={IMG_CDN + poster} alt={title} className="w-full h-full" />
        </div>
      </Link>
    )
  );
};

export default MovieCard;
