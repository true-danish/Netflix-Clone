import { useDispatch, useSelector } from "react-redux";
import lang from "./../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openAI";
import { GoogleGenerativeAI } from "@google/generative-ai";
// import { GEMINI_AI_KEY, movieApiOptions } from "../utils/constants";
import { addSearchList } from "../utils/moviesSlice";
import { movieApiOptions } from "../utils/constants";

const SearchBar = () => {
  console.log("search bar");
  const langCode = useSelector((store) => store.config.lang);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  async function gptCall(userQuery) {
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_AI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
      "Act as movie recommendation system and sugest only  names of  movies or tvshows or web series.  The query is :" +
      userQuery +
      "Result should  be comma separted names of movies or tv shows or web series. Example Result :exm1,exm2,exm3,exm4,...,exm10." +
      "at most 10 results." +
      "If you dont understand user query return  a string 'false'";

    const result = await model.generateContent(prompt);
    return result.response.text().split(",");
  }

  async function tmdbCall(userQuery) {
    let data;
    const resObj1 = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        userQuery +
        "&page=1",
      movieApiOptions
    );

    const data1 = await resObj1.json();

    console.log("yes");
    const resObj2 = await fetch(
      "https://api.themoviedb.org/3/search/tv?query=" + userQuery + "&page=1",
      movieApiOptions
    );

    const data2 = await resObj2.json();
    data = [...data1.results, ...data2.results];
    // console.log(data);

    // console.log(userQuery, filterdData);

    return data;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userQuery = inputRef.current.value;

    let data = await tmdbCall(userQuery);
    console.log(data);

    if (data.length <= 0) {
      const newData = await gptCall(userQuery);
      console.log(newData);
      if (newData[0] === "false") return;
      const promiseArray = newData.map((ele) => {
        return tmdbCall(ele);
      });
      const promiseArrayResult = await Promise.allSettled(promiseArray);

      const filterData = promiseArrayResult.reduce((acc, e) => {
        if (e.status === "fulfilled") return [...acc, ...e.value];
        else return [...acc];
      }, []);
      data = filterData;
    }
    dispatch(addSearchList(data));
  };

  return (
    <section className=" flex items-start   ">
      <div className=" mt-56 mx-auto flex  flex-col  items-center gap-4 bg-black/60 p-8 rounded-lg">
        <h1 className="text-5xl font-bold max-sm:text-3xl bg-black/10 text-center px-4 pb-4">
          {lang[langCode].searchTitle}
        </h1>
        <form
          className="flex gap-4 w-full maxw-xl justify-center px-4 flex-wrap "
          onSubmit={handleSubmit}
        >
          <input
            ref={inputRef}
            type="text"
            className="bg-slate-800 p-3 px-6 w-full max-w-xl rounded-lg text-lg"
            placeholder={lang[langCode].searchPlaceholder}
          />
          <button className="text-black bg-white p-2 px-8 font-bold text-xl rounded-lg hover:bg-slate-200">
            {lang[langCode].search}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
