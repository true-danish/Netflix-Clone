import { useSelector } from "react-redux";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Browse = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) navigate("/login");
  }, []);
  return (
    user && (
      <section>
        <Header />
        Browse
      </section>
    )
  );
};

export default Browse;
