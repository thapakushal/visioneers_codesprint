import { Link } from "react-router-dom";
import { FiSearch, FiChevronDown, FiMapPin, FiFilter } from "react-icons/fi";
import { FaBell } from "react-icons/fa";

const UserNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-3 border-b border-gray-200">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Grabbit Logo" className="w-10 h-9" />
          <span className="text-lg font-bold text-gray-900">Grabbit</span>
        </div>
        <div className="hidden md:flex items-center gap-9">
          <Link to="/user" className="text-sm font-medium text-gray-900">
            Home
          </Link>
          <Link to="/user/shop" className="text-sm font-medium text-gray-900">
            Shop
          </Link>
          <Link to="/user/request" className="text-sm font-medium text-gray-900">
            My Requests
          </Link>
          <Link to="/user/messages" className="text-sm font-medium text-gray-900">
            Messages
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center rounded-xl bg-gray-100">
          <div className="p-2 rounded-l-xl bg-gray-100">
            <FiSearch className="w-5 h-5 text-gray-600" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-3 bg-gray-100 rounded-r-xl text-gray-600 text-sm focus:outline-none w-32"
          />
        </div>
        <div className="p-2 rounded-full bg-gray-100">
          <FaBell className="w-5 h-5 text-gray-900" />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300">
          <img src="/user.png" className="rounded-full object-contain"></img>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
