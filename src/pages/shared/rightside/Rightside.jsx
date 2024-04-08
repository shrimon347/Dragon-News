import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"
import bg from "../../../assets/bg.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Rightside = () => {
  const  {signInWithGoogle} = useContext(AuthContext)
  const handleToLgoinWithGoogle = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }
  return (
    <div className="">
      <div className="p-4 space-y-3 mb-6">
        <p className="text-3xl">Login With</p>
        <button onClick={handleToLgoinWithGoogle} className="btn btn-error text-white w-full">
          <FaGoogle /> Google
        </button>
        <button className="btn btn-error text-white w-full ">
          <FaGithub /> Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-6">Find us on</h2>
        <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="p-4 flex text-lg items-center border-x" href="">
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
          <FaInstagram className="mr-3"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      <div className="p-4 space-y-3 mb-6 bg-slate-100">
        <p className="text-3xl">Q Jone</p>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
      <div className="relative text-center">
          <img src={bg} className="relative" alt="" />
          <div className="absolute top-[20%] p-4 space-y-3">
            <p className="text-3xl text-white">Create an Amazing Newspaper</p>
            <p className="text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className="bg-pink-600 text-white px-5 py-4">Learn More</button>
          </div>
      </div>
    </div>
  );
};

export default Rightside;
