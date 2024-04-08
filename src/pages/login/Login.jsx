import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../shared/navbar/Navbar";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email,password);
    signIn(email,password)
    .then(result => {
        console.log(result.result);
        navigate(location?.state ?location.state : "/")
    })
    .catch(error => {
        console.log(error);
    })
  };

  return (
    <div>
      <Navbar />
      <div className="md:w-3/4 lg:w-1/2 mx-auto  px-14 py-10 shadow-xl mt-[10%]">
        <p className="text-3xl text-center my-10">Login Your Account</p>
        <hr />
        <form className="mt-10" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black text-white hover:bg-gray-800">
              Login
            </button>
          </div>
          <div className="mt-8 text-center">
            <span>
              Dont’t Have An Account ?{" "}
              <Link to="/register" className="text-red-600 font-bold">
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
