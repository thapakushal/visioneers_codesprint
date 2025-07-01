import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { axiosInstance } from "../../lib/axios";
import { loginRequest,loginSuccess } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Function to handle the validation
  const handleValidation = () => {
    if (!emailOrPhone.trim() || !password.trim()) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    return true;
  };
  //Function to send the data to the backendn
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    try {
      dispatch(loginRequest());
      const response = await axiosInstance.post("/auth/login", {
        email: emailOrPhone,
        password,
      });
      toast.success("Login successful!");
      dispatch(loginSuccess(response.data.data));
      const role = response.data.data.role;
      switch (role) {
        case "user":
          navigate("/user");
          break;
        case "shop":
          navigate("/shop");
          break;
        default:
          navigate("/unauthorized");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7FAFC]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="flex justify-between items-center p-3 px-4 sm:px-10 h-12 border-b border-[#E6E8EB]">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-[#0D0F1C]"></div>
          <div className="font-bold text-lg text-[#0D0F1C]">Grabbit</div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 sm:p-5 sm:px-10 flex-grow">
        <div className="w-full max-w-[960px] text-center py-5">
          <h2 className="font-bold text-2xl sm:text-[28px] leading-[35px] text-[#0D0F1C]">Welcome back</h2>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-[480px] space-y-6">
          <div>
            <label htmlFor="emailOrPhone" className="block pb-2 font-medium text-[#0D0F1C] text-base leading-6">
              Email or Phone
            </label>
            <input
              id="emailOrPhone"
              name="emailOrPhone"
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full h-14 p-4 bg-[#E6E8F5] rounded-lg placeholder-[#47579E] text-[#47579E] focus:outline-none focus:ring-2 focus:ring-[#617AFA]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block pb-2 font-medium text-[#0D0F1C] text-base leading-6">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 p-4 bg-[#E6E8F5] rounded-lg placeholder-[#47579E] text-[#47579E] focus:outline-none focus:ring-2 focus:ring-[#617AFA]"
            />
            <div className="text-right mt-2">
              <Link to="/forgot-password" className="text-[#47579E] text-sm hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-[#617AFA] rounded-lg text-[#F7FAFC] font-bold text-base leading-6 hover:bg-[#5168DA] transition-colors"
          >
            Login
          </button>
          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-[#E6E8EB]"></div>
            <span className="flex-shrink mx-4 text-[#47579E] text-sm">or</span>
            <div className="flex-grow border-t border-[#E6E8EB]"></div>
          </div>
          <div className="space-y-4">
            <button
              type="button"
              className="w-full h-10 bg-[#E6E8F5] rounded-lg text-[#0D0F1C] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#D6D8E5] transition-colors"
            >
              <FcGoogle className="w-5 h-5" />
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full h-10 bg-[#E6E8F5] rounded-lg text-[#0D0F1C] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#D6D8E5] transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
              Continue with Facebook
            </button>
          </div>
          <div className="text-center text-[#47579E] text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#617AFA] hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
