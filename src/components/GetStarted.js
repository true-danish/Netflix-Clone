import { useContext } from "react";
import { Link } from "react-router-dom";
import { signUpContext } from "../utils/myContext";

const GetStarted = () => {
  const { setSignUp } = useContext(signUpContext);
  const handleClick = () => {
    setSignUp(true);
  };
  return (
    <div className="">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex gap-4 justify-center py-4 flex-wrap ">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="bg-slate-800/40 px-4 py-4 border  placeholder:text-white border-solid border-gray-500 rounded-md outline-8 w-full max-w-lg  "
        />
        <Link to="/login">
          <button
            className="bg-red-600 rounded-md px-4 py-4 text-xl font-bold w-max"
            onClick={handleClick}
          >
            Get Started &gt;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
