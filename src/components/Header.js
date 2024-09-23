import { useContext } from "react";
import { Link } from "react-router-dom";
import { signUpContext } from "../utils/myContext";

const Header = () => {
  const { setSignUp } = useContext(signUpContext);
  return (
    <header className="absolute   w-full  bg-gradient-to-b from-black  z-10 px-8 lg:px-16">
      <div className="flex justify-between items-center flex-wrap">
        <Link to="/">
          <div className="w-32 lg:w-52 ">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="netflix logo"
            />
          </div>
        </Link>

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
      </div>
    </header>
  );
};

export default Header;
