import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
import BreakingNews from "../home/BreakingNews";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import Rightside from "../shared/rightside/Rightside";
import HighlightNews from "./HighlightNews";


const NewsDetail = () => {
  const news = useLoaderData();
  const { id } = useParams();

  const anew = news.find((a_new) => a_new._id === id);
  const { title, image_url, details } = anew;
  console.log(anew);
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="md:col-span-3">
          <p className="text-xl mb-5">Dragon News</p>
          <div className="card card-compact bg-base-100  border rounded-sm mb-8">
            <div className="card-body">
              <figure>
                <img src={image_url} alt="Shoes" />
              </figure>
              <h2 className="card-title">{title}</h2>
              <p>{details}</p>
              <Link className="w-1/3">
                <button className="bg-pink-600  flex items-center gap-4 text-white px-5 py-4">
                  <FaArrowLeft /> All news in this categorye
                </button>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xl mb-5">Editors Insight</p>
            <div className="grid md:grid-cols-3">
              {news.map((anew) => <HighlightNews key={anew._id} anew={anew}></HighlightNews>).slice(0, 9)}
            </div>
          </div>
        </div>
        <div>
          <Rightside />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
