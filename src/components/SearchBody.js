import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";

const SearchBody = () => {
  const result = useSelector((store) => store.movies.searchList);
  // console.log(result);
  return (
    <section className="bg-black min-h-screen">
      {/* <div className="  overflow-hidden opacity-40    ">
        <img
          src={heroBackgroundURL}
          alt="background "
          className="h-screen object-cover w-full"
        />
      </div> */}

      <SearchBar />
      <SearchResult result={result} />
    </section>
  );
};

export default SearchBody;
