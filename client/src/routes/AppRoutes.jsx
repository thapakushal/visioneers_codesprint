import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopSignupForm from "../pages/SignUp/ShopSignUp";
import UserSignupForm from "../pages/SignUp/UserSignUp";
import LoginPage from "../pages/Login/LoginPage";
import { Toaster } from "react-hot-toast";
import RegisterOptionPage from "../pages/SignUp/Registration";
import LandingPage from "../pages/LandingPage";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register/shop" element={<ShopSignupForm />}></Route>
        <Route path="/register/user" element={<UserSignupForm />}></Route>
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegisterOptionPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
