import { NavLink } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const ShopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 border-b border-gray-200 h-16">
        <div className="flex items-center">
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-gray-900"></div>
            <span className="font-bold text-lg text-gray-900">Grabbit</span>
          </div>
        </div>

        <button className="md:hidden p-2 rounded-lg focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <FiX className="w-5 h-5 text-gray-900" /> : <FiMenu className="w-5 h-5 text-gray-900" />}
        </button>

        <div className="hidden md:flex items-center">
          <nav className="flex gap-6 lg:gap-8 mr-6 lg:mr-8">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `font-medium text-sm text-gray-900 hover:text-gray-700 transition-colors ${
                  isActive ? "border-b-2 border-pink-500" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/shop/request"
              className={({ isActive }) =>
                `font-medium text-sm text-gray-900 hover:text-gray-700 transition-colors ${
                  isActive ? "border-b-2 border-pink-500" : ""
                }`
              }
            >
              Requests
            </NavLink>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                `font-medium text-sm text-gray-900 hover:text-gray-700 transition-colors ${
                  isActive ? "border-b-2 border-pink-500" : ""
                }`
              }
            >
              Inventory
            </NavLink>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `font-medium text-sm text-gray-900 hover:text-gray-700 transition-colors ${
                  isActive ? "border-b-2 border-pink-500" : ""
                }`
              }
            >
              Analytics
            </NavLink>
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            <button className="p-2 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              <IoIosNotificationsOutline className="w-5 h-5 text-gray-900" />
            </button>
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-200">
          <nav className="flex flex-col px-4 py-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `py-3 px-2 font-medium text-sm text-gray-900 hover:text-gray-700 transition-colors border-b border-gray-100 ${
                  isActive ? "border-b-2 border-pink-500" : ""
                }`
              }
              onClick={toggleMenu}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/shop/request"
              className={({ isActive }) =>
                `py-3 px-2 font-medium text-sm text-gray-900 hover:text-gray-700 transition-colors border-b border-gray-100 ${
                  isActive ? "border-b-2 border-pink-500" : ""
                }`
              }
              onClick={toggleMenu}
            >
              Requests
            </NavLink>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                `py-3 px-2 font-medium text-sm text-gray-900 hover:text-gray-700 transition-colors border-b border-gray-100 ${
                  isActive ? "border-b-2 border-pink-500" : ""
                }`
              }
              onClick={toggleMenu}
            >
              Inventory
            </NavLink>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `py-3 px-2 font-medium text-sm text-gray-900 hover:text-gray-700 transition-colors border-b border-gray-100 ${
                  isActive ? "border-b-2 border-pink-500" : ""
                }`
              }
              onClick={toggleMenu}
            >
              Analytics
            </NavLink>
          </nav>

          <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
            <button className="p-2 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              <IoIosNotificationsOutline className="w-5 h-5 text-gray-900" />
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopNavbar;
