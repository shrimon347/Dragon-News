import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NewsCard from "./NewsCard";

const Leftside = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <div className="space-y-6">
        <p className="text-2xl text-left">All Caterogy </p>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className=" block text-left text-xl font-semibol"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="mt-10">
        {news
          .map((anews) => <NewsCard key={anews._id} anews={anews} />)
          .slice(0, 4)}
      </div>
    </div>
  );
};

export default Leftside;
