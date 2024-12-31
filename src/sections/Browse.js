import BrowseBody from "../components/BrowseBody";
import SearchBody from "../components/SearchBody";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptIsActive = useSelector((store) => store.gpt.isActive);
  const user = useSelector((store) => store.user);
  if (!user) return;
  return <section>{gptIsActive ? <SearchBody /> : <BrowseBody />}</section>;
};

export default Browse;
