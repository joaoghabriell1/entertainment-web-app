import { useContext, useEffect } from "react";
import Trending from "./Trending";
import Recomended from "./Recomended";
import Context from "../../store/Context";

const Home = () => {
  const ctx = useContext(Context);

  const { shows, filter } = ctx;

  useEffect(() => {
    ctx.cleanFilter();
  }, []);

  return (
    <>
      {filter === "" && <Trending />}
      <Recomended shows={shows} />
    </>
  );
};

export default Home;
