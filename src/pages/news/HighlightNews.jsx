/* eslint-disable react/prop-types */
import { CiCalendar } from "react-icons/ci";

const HighlightNews = ({anew}) => {
  return (
    <div className="card-body">
      <figure>
        <img src={anew.image_url} alt="Shoes" />
      </figure>
      <h2 className="card-title">{anew.title}</h2>
      <div className="flex items-center">
        <CiCalendar className="text-xl mr-3" /> Jan 4, 2024
      </div>
    </div>
  );
};

export default HighlightNews;
