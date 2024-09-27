import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ poster }) => {
  // console.log(poster);
  return (
    <div className="w-44 max-sm:w-28  shrink-0 cursor-pointer">
      <img src={IMG_CDN + poster} alt="movie poster" className="w-ful" />
    </div>
  );
};

export default MovieCard;
