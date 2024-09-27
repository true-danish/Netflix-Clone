import { heroBackgroundURL } from "../utils/constants";
import SearchBar from "./SearchBar";

const SearchBody = () => {
  return (
    <section>
      {/* <div className="  overflow-hidden opacity-40    ">
        <img
          src={heroBackgroundURL}
          alt="background "
          className="h-screen object-cover w-full"
        />
      </div> */}

      <SearchBar />
    </section>
  );
};

export default SearchBody;
