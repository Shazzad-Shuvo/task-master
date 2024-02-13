import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/taskMaster.png";
import logoSmall from "../../assets/tm-high-resolution-logo-transparent.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="max-w-[90rem] mx-auto flex justify-between items-center h-16">
      <div className="">
        <img className="h-9 hidden md:flex" src={logo} alt="" />
        <img className='h-9 md:hidden' src={logoSmall} alt="" />
      </div>
      <div>
        <ul className="flex">
          <li className="">
            <Link
              to="/"
              className={`hover:bg-gradient-to-t from-orange-500 hover:text-white 
              ${location.pathname === "/"
                  ? "bg-gradient-to-t from-orange-500 text-white"
                  : "text-gray-500"
              } font-bold py-5 px-4`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/task"
              className={`hover:bg-gradient-to-t from-orange-500 hover:text-white 
              ${location.pathname === "/task"
                  ? "bg-gradient-to-t from-orange-500 text-white"
                  : "text-gray-500"
              } font-bold py-5 px-4`}
            >
              Tasks
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
