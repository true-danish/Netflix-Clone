import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpContext } from "../utils/myContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import useAuthChange from "../hooks/useAuthChange";
import { toogleGpt } from "../utils/gptSlice";
import { supportedLanguage } from "../utils/languageConstants";
import { setLang } from "../utils/configSlice";

const Header = () => {
  const { setSignUp } = useContext(signUpContext);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const gptIsActive = useSelector((store) => store.gpt.isActive);

  useAuthChange();

  const handleGptClick = () => {
    dispatch(toogleGpt());
    navigate("/browse/");
  };

  const handleLanguageClick = (e) => {
    console.log(e.target.value);
    dispatch(setLang(e.target.value));
  };

  return (
    <header className="absolute   w-full  bg-gradient-to-b from-black pt-4 z-10 px-8 lg:px-16">
      <div className="flex justify-between items-center flex-wrap">
        <Link to="/">
          <div className="w-32 lg:w-52 ">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="netflix logo"
            />
          </div>
        </Link>

        {user && (
          <div className="flex gap-2 items-center cursor-pointer">
            {/* <div>
              <img
                src={user.photoURL}
                alt=""
                user
                className="w-8 aspect-square"
              />
               <p>{user.displayName}</p>
          </div> */}

            <div className="flex flex-wrap gap-2 lg:gap-4">
              {gptIsActive && (
                <select
                  name="language"
                  className="bg-slate-800 px-4"
                  onChange={handleLanguageClick}
                >
                  {supportedLanguage.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}

              <button
                onClick={handleGptClick}
                className="py-2 px-6 max-sm:px-2 max-sm:py-1 text-white text-xs md:text-lg font-bold rounded-md bg-red-600 "
              >
                {gptIsActive ? (
                  "Browse Movies"
                ) : (
                  <p className="flex gap-2 items-center">
                    GPT Search
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </p>
                )}
              </button>
              <button
                className="py-2 px-6 max-sm:px-2 max-sm:py-1 text-white text-xs md:text-lg  font-bold rounded-md bg-red-600"
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.

                      navigate("/login");
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}

        {user === null && (
          <div>
            <Link to="/login">
              <button
                className="py-2 px-6 text-white text-sm font-bold rounded-md bg-red-600"
                onClick={() => setSignUp(false)}
              >
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
