import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { signUpContext } from "../utils/myContext";
import { useState } from "react";
const Home = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <signUpContext.Provider
      value={{
        signUp: signUp,
        setSignUp: setSignUp,
      }}
    >
      <section className="">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </signUpContext.Provider>
  );
};

export default Home;
