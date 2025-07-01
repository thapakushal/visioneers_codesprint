import { Link } from "react-router-dom";
import { FaCirclePlus, FaBell, FaBagShopping } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white mr-1.5"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <header className="flex justify-between items-center p-4 px-6 h-16 border-b border-[#E6E8EB]">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-[#121417] rounded-full"></div>
          <div className="font-bold text-lg text-[#121417]">Grabbit</div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-[#121417] text-base font-medium hover:text-[#1A94E6]">
            About
          </Link>
          <Link to="/contact" className="text-[#121417] text-base font-medium hover:text-[#1A94E6]">
            Contact
          </Link>
          <div className="flex gap-3">
            <Link
              to="/auth/login"
              className="bg-[#1A94E6] text-white text-base font-bold px-4 py-2 rounded-xl hover:bg-[#1682CC]"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#F0F2F5] text-[#121417] text-base font-bold px-4 py-2 rounded-xl hover:bg-[#E0E2E5]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <section className="relative flex items-center justify-center h-[400px] sm:h-[500px] mx-6 my-8 rounded-lg overflow-hidden">
        <img src="/home.png" alt="Hero background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-extrabold text-3xl sm:text-4xl leading-tight text-white mb-4">
            Find what you need! nearby: <span className="text-[#1A94E6]">Fast.</span>
          </h1>
          <p className="text-white text-lg mb-8">Connect with local shops and get your items delivered quickly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register/user"
              className="bg-[#1A94E6] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#1682CC]"
            >
              I'm a User
            </Link>
            <Link
              to="/register/shop"
              className="bg-white text-[#121417] font-bold px-8 py-3 rounded-xl hover:bg-gray-100"
            >
              I'm a Shop
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <h2 className="font-bold text-2xl text-[#121417] mb-10 text-center">How it works</h2>
        <div className="mb-16">
          <h3 className="font-extrabold text-3xl text-[#121417] mb-4">Simple Steps to Get Started For User</h3>
          <p className="text-[#121417] text-lg mb-8">
            Discover how easy it is to find and receive your desired items from nearby shops with our streamlined
            process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#DBE0E6] rounded-lg p-6">
              <FaCirclePlus className="text-[#1A94E6] text-3xl mb-4" />
              <h4 className="font-bold text-xl text-[#121417] mb-2">Post</h4>
              <p className="text-[#637887]">Find the products you need from local shops.</p>
            </div>
            <div className="bg-white border border-[#DBE0E6] rounded-lg p-6">
              <FaBell className="text-[#1A94E6] text-3xl mb-4" />
              <h4 className="font-bold text-xl text-[#121417] mb-2">Get Notified</h4>
              <p className="text-[#637887]">Place your order and customize your delivery.</p>
            </div>
            <div className="bg-white border border-[#DBE0E6] rounded-lg p-6">
              <FaBagShopping className="text-[#1A94E6] text-3xl mb-4" />
              <h4 className="font-bold text-xl text-[#121417] mb-2">Purchase</h4>
              <p className="text-[#637887]">Visit the shop and purchase your item where it is available</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-extrabold text-3xl text-[#121417] mb-4">Simple Steps to Get Started For Shop</h3>
          <p className="text-[#121417] text-lg mb-8">
            Discover how easy it is to find and receive your desired items from nearby shops with our streamlined
            process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#DBE0E6] rounded-lg p-6">
              <FaCirclePlus className="text-[#1A94E6] text-3xl mb-4" />
              <h4 className="font-bold text-xl text-[#121417] mb-2">Sign Up</h4>
              <p className="text-[#637887]">Create an account and set up your shop</p>
            </div>
            <div className="bg-white border border-[#DBE0E6] rounded-lg p-6">
              <FaBell className="text-[#1A94E6] text-3xl mb-4" />
              <h4 className="font-bold text-xl text-[#121417] mb-2">Receive Request</h4>
              <p className="text-[#637887]">Get product request from the client</p>
            </div>
            <div className="bg-white border border-[#DBE0E6] rounded-lg p-6">
              <FaBagShopping className="text-[#1A94E6] text-3xl mb-4" />
              <h4 className="font-bold text-xl text-[#121417] mb-2">Respond & Sell</h4>
              <p className="text-[#637887]">Sell your unique product to the customer</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white py-10 px-6 border-t border-[#E6E8EB] mt-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="text-[#637887] hover:text-[#1A94E6]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#637887] hover:text-[#1A94E6]">
              Terms of Service
            </Link>
            <Link to="/help" className="text-[#637887] hover:text-[#1A94E6]">
              Help Center
            </Link>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[#637887] hover:text-[#1A94E6]">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-[#637887] hover:text-[#1A94E6]">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-[#637887] hover:text-[#1A94E6]">
              <FaInstagram size={20} />
            </a>
          </div>
          <p className="text-[#637887] text-center">© 2025 Grabbit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
