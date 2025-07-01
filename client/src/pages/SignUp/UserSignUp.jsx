import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-hot-toast";

const UserSignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


//Function to handle the validation to ensure only proper data is sent to the database
  const handleValidation = () => {
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    return true;
  };


  //function to send the data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    try {
      if (handleValidation()) {
        response = await axiosInstance.post("/auth/register/individual", { fullName, email, password, phone });
        console.log("Form submitted", response.data);
        toast.success("User registered successfully");
      }
    } catch (error) {
      toast.error(error.response);
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
          <h2 className="font-bold text-2xl sm:text-[28px] leading-[35px] text-[#0D0F1C]">Sign up to Grabbit</h2>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-[480px] space-y-6">
          <div>
            <label htmlFor="fullName" className="block pb-2 font-medium text-[#0D0F1C] text-base leading-6">
              Person's Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Your Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-14 p-4 bg-[#E6E8F5] rounded-lg placeholder-[#47579E] text-[#47579E] focus:outline-none focus:ring-2 focus:ring-[#617AFA]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block pb-2 font-medium text-[#0D0F1C] text-base leading-6">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 p-4 bg-[#E6E8F5] rounded-lg placeholder-[#47579E] text-[#47579E] focus:outline-none focus:ring-2 focus:ring-[#617AFA]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block pb-2 font-medium text-[#0D0F1C] text-base leading-6">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-14 p-4 bg-[#E6E8F5] rounded-lg placeholder-[#47579E] text-[#47579E] focus:outline-none focus:ring-2 focus:ring-[#617AFA]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block pb-2 font-medium text-[#0D0F1C] text-base leading-6">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 p-4 bg-[#E6E8F5] rounded-lg placeholder-[#47579E] text-[#47579E] focus:outline-none focus:ring-2 focus:ring-[#617AFA]"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block pb-2 font-medium text-[#0D0F1C] text-base leading-6">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-14 p-4 bg-[#E6E8F5] rounded-lg placeholder-[#47579E] text-[#47579E] focus:outline-none focus:ring-2 focus:ring-[#617AFA]"
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-[#617AFA] rounded-lg text-[#F7FAFC] font-bold text-base leading-6 hover:bg-[#5168DA] transition-colors cursor-pointer"
          >
            Create Account
          </button>
          <div className="text-center text-[#47579E] text-sm leading-[21px]">
            By signing up, you agree to our Terms & Privacy Policy.
          </div>
          <div className="text-center text-[#47579E] text-sm leading-[21px]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#617AFA] hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignupForm;
