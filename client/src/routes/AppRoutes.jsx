import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopSignupForm from "../pages/SignUp/ShopSignUp";
import UserSignupForm from "../pages/SignUp/UserSignUp";
import LoginPage from "../pages/Login/LoginPage";
import { Toaster } from "react-hot-toast";
import RegisterOptionPage from "../pages/SignUp/Registration";
import LandingPage from "../pages/LandingPage";
import HeroSection from "../pages/Shop/HeroSection";
import ShopLayout from "../components/layout/ShopLayout";
import RequestsPage from "../pages/Shop/RequestsPage";
import RespondToRequest from "../pages/Shop/RespondToRequest";
import UserLayout from "../components/layout/UserLayout";
import UserRequestPage from "../pages/User/UserRequest";
import UserDashboard from "../pages/User/UserDashboard";
import Unauthorized from "../pages/Unauthorized";
import Shop from "../pages/User/Shop";
import RoleRoute from "./RoleRoute";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        {/* Secured Shop routes */}
        <Route element={<RoleRoute allowedRoles={["shop"]} />}>
          <Route path="/shop" element={<ShopLayout />}>
            <Route index element={<HeroSection />} />
            <Route path="request" element={<RequestsPage />}></Route>
            <Route path="respond-to-request" element={<RespondToRequest />}></Route>
          </Route>
        </Route>
        {/* Secured User routes  */}
        <Route element={<RoleRoute allowedRoles={["user"]} />}>
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<UserDashboard />}></Route>
            <Route path="request" element={<UserRequestPage />}></Route>
            <Route path="shop" element={<Shop />}></Route>
          </Route>
        </Route>

        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register/shop" element={<ShopSignupForm />}></Route>
        <Route path="/register/user" element={<UserSignupForm />}></Route>
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegisterOptionPage />}></Route>
        <Route path="/unauthorized" element={<Unauthorized />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
