import { useContext, useEffect, useRef, useState } from "react";
import { heroBackgroundURL } from "../utils/constants";
import { signUpContext } from "../utils/myContext";

import validate from "../utils/validate";
import authUser from "../utils/authUser";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signUp, setSignUp } = useContext(signUpContext);
  const [errors, setErrors] = useState({});
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("sign in ", auth);
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
        // ...
      } else {
        console.log("sign out ", auth);

        dispatch(removeUser());
      }
    });
  }, []);
  const handleSignClick = (e) => {
    e.preventDefault();
    const data = validate({
      email: emailRef?.current?.value,
      name: nameRef?.current?.value,
      password: passwordRef?.current?.value,
    });

    setErrors(data);
    if (errors.success);
    authUser(
      emailRef.current.value,
      passwordRef.current.value,
      signUp,
      setErrors,
      nameRef.current.value,
      dispatch
    );
  };

  return (
    <section className={`relative  `}>
      <div className="  overflow-hidden opacity-40    bg-yellow-600">
        <img
          src={heroBackgroundURL}
          alt="background "
          className="h-screen object-cover w-full"
        />
      </div>
      <form
        autoComplete=""
        className="absolute mx-auto bg-black/70 p-8 md:p-16 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-lg w-full max-w-md "
      >
        <h1 className="text-3xl mb-3">{signUp ? "Sign Up" : "Sign In"}</h1>
        <div className="grid gap-y-4">
          {signUp && (
            <div>
              <input
                onInput={() => {
                  setErrors((prev) => {
                    return { ...prev, name: "" };
                  });
                }}
                autoComplete="on"
                ref={nameRef}
                className="bg-slate-800/40 px-4 py-4 border  placeholder:text-white border-solid border-gray-500 rounded-md outline-8 w-full max-w-lg"
                type="text"
                placeholder="Username"
              />
              <p className="text-red-700">{errors.name}&nbsp;</p>
            </div>
          )}

          <div>
            <input
              onInput={() => {
                setErrors((prev) => {
                  return { ...prev, email: "" };
                });
              }}
              autoComplete="on"
              ref={emailRef}
              className="bg-slate-800/40 px-4 py-4 border  placeholder:text-white border-solid border-gray-500 rounded-md outline-8 w-full max-w-lg"
              type="text"
              placeholder="Email"
            />
            <p className="text-red-700 m-0 p-0">{errors.email}&nbsp;</p>
          </div>
          <div>
            <input
              onInput={() => {
                setErrors((prev) => {
                  return { ...prev, password: "" };
                });
              }}
              autoComplete="on"
              ref={passwordRef}
              className="bg-slate-800/40 px-4 py-4 border  placeholder:text-white border-solid border-gray-500 rounded-md outline-8 w-full max-w-lg"
              type="password"
              placeholder="Password"
            />
            <div className="text-red-700">{errors.password}&nbsp;</div>
          </div>

          <button
            className="bg-red-600 rounded-md py-2 my-4"
            onClick={handleSignClick}
          >
            {signUp ? "Sign Up" : "Sign In"}
          </button>
          <p className="cursor-pointer text-right ">Forgot Password?</p>
        </div>
        {signUp ? (
          <p
            className="text-2xl cursor-pointer"
            onClick={() => setSignUp(false)}
          >
            Sign in
          </p>
        ) : (
          <p className="text-gray-400 my-4">
            New to Netflix?{" "}
            <span
              className="text-white cursor-pointer"
              onClick={() => setSignUp(true)}
            >
              Sign up now.
            </span>
          </p>
        )}
      </form>
    </section>
  );
};

export default Login;
