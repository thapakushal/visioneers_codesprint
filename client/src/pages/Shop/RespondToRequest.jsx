import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const RespondToRequest = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white min-h-screen">
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span className="hover:text-gray-700 cursor-pointer">Requests</span>
        <FiChevronRight className="mx-2" />
        <span className="text-gray-900">Request ID: 12345</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Respond to Request</h1>
            <p className="text-sm text-gray-500">Customer: Sarah Miller</p>
          </div>

          {/* Request Summary */}
          <div className="flex flex-col sm:flex-row justify-between bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Handmade Ceramic Mug</h2>
              <p className="text-sm text-gray-500 mb-4">Quantity: 2 | Urgency: High</p>
              <button className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                View Request Details
              </button>
            </div>
            <div className="sm:w-64 h-48 sm:h-auto bg-gray-200 rounded-lg mt-4 sm:mt-0">
              <img src="/cup.png" alt="Handmade Ceramic Mug" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          {/* Response Form */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Respond to Request</h2>

            {/* Select Product */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Product</label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Handmade Ceramic Mug - Blue</option>
                  <option>Handmade Ceramic Mug - Red</option>
                  <option>Handmade Ceramic Mug - Green</option>
                </select>
                <FiChevronDown className="absolute right-4 top-4 text-gray-400" />
              </div>
            </div>

            {/* Offer Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Offer Quantity</label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter quantity"
                defaultValue="2"
              />
            </div>

            {/* Price */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">ETA</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Estimated time of arrival"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Add any additional details about your offer"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button className="px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Send Offer
            </button>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Customer Request History</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Request ID: 12345</p>
                    <p className="text-sm text-gray-500">2 items</p>
                  </div>
                  <p className="text-sm text-gray-500">2 days ago</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Request ID: 67890</p>
                    <p className="text-sm text-gray-500">1 item</p>
                  </div>
                  <p className="text-sm text-gray-500">1 week ago</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Request ID: 11223</p>
                    <p className="text-sm text-gray-500">3 items</p>
                  </div>
                  <p className="text-sm text-gray-500">2 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RespondToRequest;
