import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

import { addUser } from "./userSlice";
import { profilePic } from "./constants";
// console.log(profilePic);

const authUser = (email, password, signUp, setErrors, name, dispatch) => {
  if (signUp) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        // const user = userCredential.user;
        // console.log(auth.currentUser);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, displayName, email, photoURL }));
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log("hi");
        setErrors({ email: "Email Already in Use" });
        // ..
      });
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;

        setErrors({ password: "Email or password incorrect" });
      });
  }
};

export default authUser;
