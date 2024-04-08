import moment from "moment/moment";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div className="text-center p-4">
      <img className="mx-auto" src={logo} alt="" />
      <p className="py-4">Journalism Without Fear or Favor</p>
      <p className="text-xl py-2">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
