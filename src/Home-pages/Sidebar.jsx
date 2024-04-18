// Import the CSS file
import { NavLink } from "react-router-dom";
import { FaBalanceScale, FaBlog, FaGamepad } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div className="">
      <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
        <div className="my-2 mb-4">
          <h1 className="text-2x text-white font-bold">My Game</h1>
        </div>
        <hr />
        <ul className="mt-3 text-white font-bold">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink exact to="/"  className="flex items-center">
              <FaGamepad className="inline-block w-6 h-6 mr-2 -mt-2" />
              My Game
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink to="/Profile"  className="flex items-center">
              <FaUserCircle className="inline-block w-6 h-6 mr-2 -mt-2" />
              Profile
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink to="/Balanc"  className="flex items-center">
              <MdAccountBalance className="inline-block w-6 h-6 mr-2 -mt-2" />
              Balance
            </NavLink>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <NavLink to="/Bloge" className="flex items-center">
              <FaBlog className="inline-block w-6 h-6 mr-2 -mt-2" />
              Bloge
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
