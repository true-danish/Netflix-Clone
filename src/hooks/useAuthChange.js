import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  removeAllMovies,
  removeMovie,
  removeMovieList,
  removePoster,
  removeTrailer,
} from "../utils/moviesSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeGpt } from "../utils/gptSlice";

const useAuthChange = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // onAuthStateChanged return an unsubscribe function to remove the event listner.
    const unsubscirbe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("sign in ", auth);
        // console.log(auth.currentUser);
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
        // ...
      } else {
        console.log("sign out ", auth);
        dispatch(removeUser());
        dispatch(removeAllMovies());
        dispatch(removeGpt());
        navigate("/");
      }
    });

    // Just call unsubscirbe function to remove event listner.
    return () => unsubscirbe();
    // eslint-disable-next-line
  }, []);
};

export default useAuthChange;
