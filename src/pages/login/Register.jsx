import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../shared/navbar/Navbar";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="md:w-3/4 lg:w-1/2 mx-auto  px-14 py-10 shadow-xl mt-[5%]">
        <p className="text-3xl text-center my-10">Register Your Account</p>
        <hr />
        <form className="mt-10" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex items-center mt-8 gap-6">
            <input type="checkbox" defaultChecked className="checkbox" />
            <p>
              Accept <span className="font-bold">Term & Conditions</span>
            </p>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black text-white hover:bg-gray-800">
              Register
            </button>
          </div>
          <div className="mt-8 text-center">
            <span>
              Have An Account ?{" "}
              <Link to="/login" className="text-red-600 font-bold">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
