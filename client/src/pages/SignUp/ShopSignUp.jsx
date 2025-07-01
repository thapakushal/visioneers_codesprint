import React, { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-hot-toast";

const ShopSignupForm = () => {
  const [shopName, setShopName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [shopCategory, setShopCategory] = useState("");
  const [businessLocation, setBusinessLocation] = useState("");
//Function to handle the validation to ensure only proper data is sent to the database
  const handleValidation = () => {
    if (!shopName || !fullName || !email || !phone || !password || !confirmPassword) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return false;
    }
    if (phone.length < 8) {
      toast.error("Phone number must be at least 8 characters.");
      return false;
    }
    return true;
  };
//Send the data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!handleValidation()) return;

    try {
      const response = await axiosInstance.post("/auth/register/shopkepper", {
        shopName,
        fullName,
        email,
        password,
        phone,
        shopCategory,
        businessLocation,
      });
      toast.success("Shop registered successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="flex items-center p-3 px-4 sm:px-10 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-gray-900"></div>
          <div className="font-bold text-lg text-gray-900">Grabbit</div>
        </div>
      </div>
      <div className="p-4 sm:p-5 sm:px-10 max-w-7xl mx-auto">
        <div className="text-center py-5">
          <h2 className="font-bold text-2xl sm:text-[28px] text-gray-900">Sign up to Grabbit</h2>
        </div>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <label className="block pb-2 font-medium text-gray-900">Shop Name</label>
            <input
              type="text"
              placeholder="Your shop's name"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="w-full h-14 p-4 bg-indigo-50 rounded-lg placeholder-indigo-800 text-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block pb-2 font-medium text-gray-900">Owner Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-14 p-4 bg-indigo-50 rounded-lg placeholder-indigo-800 text-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block pb-2 font-medium text-gray-900">Email</label>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 p-4 bg-indigo-50 rounded-lg placeholder-indigo-800 text-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block pb-2 font-medium text-gray-900">Phone Number</label>
            <input
              type="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-14 p-4 bg-indigo-50 rounded-lg placeholder-indigo-800 text-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block pb-2 font-medium text-gray-900">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 p-4 bg-indigo-50 rounded-lg placeholder-indigo-800 text-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block pb-2 font-medium text-gray-900">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-14 p-4 bg-indigo-50 rounded-lg placeholder-indigo-800 text-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="font-bold text-lg text-gray-900">Optional</div>
          <div>
            <label className="block pb-2 font-medium text-gray-900">Shop Category</label>
            <select
              value={shopCategory}
              onChange={(e) => setShopCategory(e.target.value)}
              className="w-full h-14 px-4 bg-indigo-50 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="groceries">Groceries</option>
              <option value="home">Home & Garden</option>
            </select>
          </div>
          <div>
            <label className="block pb-2 font-medium text-gray-900">Business Location</label>
            <input
              type="text"
              placeholder="Enter your address or zip code"
              value={businessLocation}
              onChange={(e) => setBusinessLocation(e.target.value)}
              className="w-full h-14 p-4 bg-indigo-50 rounded-lg placeholder-indigo-800 text-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto sm:px-12 h-12 bg-blue-500 rounded-lg text-white font-bold text-base hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
          >
            Create Account
          </button>
          <div className="text-center text-indigo-800 text-sm">
            By signing up, you agree to our Terms & Privacy Policy.
          </div>
          <div className="text-center text-indigo-800 text-sm">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopSignupForm;
