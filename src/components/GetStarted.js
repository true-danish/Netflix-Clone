import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signUpContext } from "../utils/myContext";

const GetStarted = () => {
  const { setSignUp } = useContext(signUpContext);
  const inputRef = useRef();
  const navigate = useNavigate();
  const handleClick = () => {
    setSignUp(true);
    navigate("/login", { state: { userEmail: inputRef.current?.value } });
  };
  return (
    <div className="">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex gap-4 justify-center py-4 flex-wrap ">
        <input
          ref={inputRef}
          type="email"
          name="email"
          placeholder="Email address"
          className="bg-slate-800/40 px-4 py-4 border  placeholder:text-white border-solid border-gray-500 rounded-md outline-8 w-full max-w-lg  "
        />

        <button
          className="bg-red-600 rounded-md px-4 py-4 text-xl font-bold w-max"
          onClick={handleClick}
        >
          Get Started &gt;
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
