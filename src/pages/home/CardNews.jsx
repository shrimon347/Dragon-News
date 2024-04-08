/* eslint-disable react/prop-types */
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const CardNews = ({ anews }) => {
  const { title, image_url, details, _id, author, total_view, rating } = anews;

  const dateString = author.published_date;

  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return (
    <div className="card card-compact overflow-hidden w-full bg-base-100  border rounded-sm mb-8">
      <div className="bg-gray-200">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar ml-5"
            >
              <div className="w-10 rounded-full mr-2">
                <img alt="Tailwind CSS Navbar component" src={author.img} />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-black">{author.name}</p>
              <p className="text-xs text-black">{formattedDate}</p>
            </div>
          </div>
          <div className="flex items-center mr-6 gap-4">
            <Link className="text-xl text-black font-extrabold">
              <CiBookmark />
            </Link>
            <Link className="text-xl text-black font-extrabold">
              <CiShare2 />
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        {details.length > 200 ? (
          <p className="mt-4">
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
              Read more......
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <hr />
        <div className="flex justify-between">
          <div className="flex items-center">
            <p>
              <FaStar />
            </p>

            <p>{rating.number}</p>
          </div>
          <div className="flex items-center mr-6 gap-4">
            <p className="text-xl">
              <MdOutlineRemoveRedEye />
            </p>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
