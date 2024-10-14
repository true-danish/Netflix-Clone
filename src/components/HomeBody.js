import { useSelector } from "react-redux";
import { heroBackgroundURL } from "../utils/constants";
import GetStarted from "./GetStarted";

const HomeBody = () => {
  const data = useSelector((store) => store.movies.poster);
  return (
    <section className={`relative  `}>
      <div className="  overflow-hidden opacity-40    ">
        <img
          src={heroBackgroundURL}
          alt="background "
          className="h-screen object-cover w-full"
        />
      </div>
      <div className="absolute mx-auto  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl  font-bold ">
          Unlimited movies, TV <br /> shows and more
        </h1>
        <p className="md:text-xl font-bold py-2">
          Starts at ₹149. Cancel at any time.
        </p>
        <h1>{data}</h1>
        <GetStarted />
      </div>
    </section>
  );
};

export default HomeBody;
