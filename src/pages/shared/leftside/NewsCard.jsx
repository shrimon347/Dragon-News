/* eslint-disable react/prop-types */
import { CiCalendar } from "react-icons/ci";
import { useEffect, useState } from "react";
const NewsCard = ({anews}) => {
  const { title, image_url, category_id} = anews;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const categories_name = categories.find(category => category.id === category_id )


  return (
    <div className="w-[100%] bg-base-100 mb-10">
      <figure>
        <img className="rounded"
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="">
        <h2 className="mt-5">
          {title}
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-start mt-5">
          <div className="mr-1 text-sm">{categories_name && categories_name.name}</div>
          <div className="flex items-center"><CiCalendar className="text-xl mr-3"/> Jan 4, 2024</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
