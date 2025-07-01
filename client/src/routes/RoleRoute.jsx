import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RoleRoute = ({ allowedRoles }) => {
  const role = useSelector((state) => state.auth.user?.role);

  if (!role) {
    return <Navigate to="/auth/login" />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default RoleRoute;
