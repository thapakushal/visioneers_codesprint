import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import RequestCard from "./cards/RequestCard";

const RequestsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Nearby Requests</h1>
        <p className="text-sm sm:text-base text-gray-500">
          View and respond to real-time product requests from customers within your local radius.
        </p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <span className="text-sm font-medium text-gray-700">All</span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="text-sm font-medium text-gray-700">ASAP</span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="text-sm font-medium text-gray-700">Low Stock</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center space-x-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select className="text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none">
            <option>Newest First</option>
            <option>Distance</option>
            <option>Urgency</option>
          </select>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4 mb-8">
        <RequestCard
          status="ASAP"
          timeAgo="5 min ago"
          title="Organic Apples"
          distance="2.1 km away"
          quantity="2"
          image="/apple.png"
          altText="Organic Apples"
        />

        <RequestCard
          status="Low Stock"
          timeAgo="12 min ago"
          title="Gluten-Free Bread"
          distance="1.5 km away"
          quantity="1"
          image="/bread.png"
          altText="Gluten-Free Bread"
        />

        <RequestCard
          status="ASAP"
          timeAgo="20 min ago"
          title="Soy Milk"
          distance="3.8 km away"
          quantity="3"
          image="/milk.png"
          altText="Soy Milk"
        />

        <RequestCard
          status="Low Stock"
          timeAgo="35 min ago"
          title="Avocados"
          distance="0.9 km away"
          quantity="1"
          image="/avacado.png"
          altText="Avocados"
        />

        <RequestCard
          status="ASAP"
          timeAgo="45 min ago"
          title="Free-Range Eggs"
          distance="4.2 km away"
          quantity="1 dozen"
          image="/egg.png"
          altText="Free-Range Eggs"
        />
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <FiChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-900 font-medium flex items-center justify-center">
          1
        </button>
        <button className="w-10 h-10 rounded-full text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center">
          2
        </button>
        <button className="w-10 h-10 rounded-full text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center">
          3
        </button>
        <span className="text-gray-700">...</span>
        <button className="w-10 h-10 rounded-full text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center">
          10
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <FiChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default RequestsPage;
