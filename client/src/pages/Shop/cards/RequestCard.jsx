import { useNavigate } from "react-router-dom";
//Reusavle Request card
const RequestCard = ({ status, timeAgo, title, distance, quantity, image, altText }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 sm:p-6 flex-1">
        <div className="flex items-center mb-1">
          <span className="text-sm font-medium text-gray-700">{status}</span>
          <span className="ml-2 text-sm text-gray-500">{timeAgo}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">
          {distance} · Requested Quantity: {quantity}
        </p>
        <button
          onClick={() => navigate("/shop/respond-to-request")}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Respond
        </button>
      </div>
      <div className="w-full sm:w-80 h-60 bg-gray-200">
        <img src={image} alt={altText} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default RequestCard;
