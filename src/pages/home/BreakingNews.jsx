import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex bg-gray-100 p-4">
      <button className="bg-red-600 text-white px-8 py-3">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link style={{ textDecoration: 'none' }} className="mr-12" to="/">I can be a React component, multiple React components, or just some text..... </Link>
        <Link style={{ textDecoration: 'none' }} className="mr-12 " to="/">I can be a React component, multiple React components, or just some text..... </Link>
        <Link style={{ textDecoration: 'none' }} className="mr-12" to="/">I can be a React component, multiple React components, or just some text..... </Link>
      </Marquee>
      
    </div>
  );
};

export default BreakingNews;
