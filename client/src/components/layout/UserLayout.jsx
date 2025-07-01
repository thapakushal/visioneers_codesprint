import { Outlet } from "react-router-dom";
import UserNavbar from "../navbars/UserNavbar";

//Layout for user (Outler allows rendering the child elements)
const UserLayout = () => {
  return (
    <>
      <UserNavbar className="min-h-screen bg-gray-50" />
      <Outlet />
    </>
  );
};

export default UserLayout;
