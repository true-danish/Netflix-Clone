import Header from "../components/Header";
import Footer from "../components/Footer";
import BrowseBody from "../components/BrowseBody";
import SearchBody from "../components/SearchBody";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptIsActive = useSelector((store) => store.gpt.isActive);
  return (
    <section>
      <Header />
      {gptIsActive ? <SearchBody /> : <BrowseBody />}
      <Footer />
    </section>
  );
};

export default Browse;
