import { useSelector } from "react-redux";
import lang from "./../utils/languageConstants";

const SearchBar = () => {
  const langCode = useSelector((store) => store.config.lang);
  return (
    <section className="h-screen bg-heroPattern flex items-start   ">
      <div className=" mt-56 mx-auto flex  flex-col  items-center gap-4 bg-black/60 p-8 rounded-lg">
        <h1 className="text-5xl font-bold max-sm:text-3xl bg-black/10 text-center px-4 pb-4">
          {lang[langCode].searchTitle}
        </h1>
        <div className="flex gap-4 w-full maxw-xl justify-center px-4 flex-wrap ">
          <input
            type="text"
            className="bg-slate-800 p-3 px-6 w-full max-w-xl rounded-lg text-lg"
            placeholder={lang[langCode].searchPlaceholder}
          />
          <button className="text-black bg-white p-2 px-8 font-bold text-xl rounded-lg hover:bg-slate-200">
            {lang[langCode].search}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
