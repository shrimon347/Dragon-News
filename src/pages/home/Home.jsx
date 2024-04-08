import Header from "../shared/header/Header";
import Leftside from "../shared/leftside/Leftside";
import Navbar from "../shared/navbar/Navbar";
import Rightside from "../shared/rightside/Rightside";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import CardNews from "./CardNews";

const Home = () => {
  const news = useLoaderData()
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div>
          <Leftside />
        </div>
        <div className="md:col-span-2">
          <p>This is the main section {news.length} </p>
          {
            news.map(anews => <CardNews key={anews._id} anews={anews}/> ).slice(0,5)
          }
        </div>
        <div>
          <Rightside />
        </div>
      </div>
    </div>
  );
};

export default Home;
