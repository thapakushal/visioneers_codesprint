const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]">
      <div className="hidden md:block w-full md:w-64 lg:w-72 p-4 lg:p-6 bg-gray-50">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">Dashboard</h1>
        <div className="flex border-b border-gray-200 pb-2 lg:pb-3">
          <button className="px-3 py-3 lg:px-4 lg:py-4 font-bold text-sm text-gray-900 border-b-2 border-gray-900">
            Home
          </button>
          <button className="px-3 py-3 lg:px-4 lg:py-4 font-bold text-sm text-indigo-700">Messages</button>
        </div>
      </div>
      <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
        <section className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Live Requests Nearby</h2>

          <div className="flex flex-col md:flex-row justify-between bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="flex flex-col gap-1 w-full md:w-2/3 mb-4 md:mb-0">
              <span className="text-sm text-indigo-700">New</span>
              <h3 className="text-base font-bold text-gray-900">Custom Embroidered Denim Jacket</h3>
              <p className="text-sm text-indigo-700">Size: M, Style: Casual, Color: Blue</p>
              <button className="mt-2 px-4 py-2 bg-indigo-50 text-gray-900 font-medium text-sm rounded-lg w-fit hover:bg-indigo-100 transition-colors">
                View Request
              </button>
            </div>
            <div className="w-full md:w-1/3 h-48 md:h-40 rounded-lg overflow-hidden">
              <img
                src="/jacket.png"
                alt="Custom Embroidered Denim Jacket"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="flex flex-col gap-1 w-full md:w-2/3 mb-4 md:mb-0">
              <span className="text-sm text-indigo-700">New</span>
              <h3 className="text-base font-bold text-gray-900">Personalized Leather Wallet</h3>
              <p className="text-sm text-indigo-700">Material: Genuine Leather, Color: Brown, Initials: AB</p>
              <button className="mt-2 px-4 py-2 bg-indigo-50 text-gray-900 font-medium text-sm rounded-lg w-fit hover:bg-indigo-100 transition-colors">
                View Request
              </button>
            </div>
            <div className="w-full md:w-1/3 h-48 md:h-40 rounded-lg overflow-hidden">
              <img
                src="/purse.png"
                alt="Personalized Leather Wallet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="flex flex-col gap-1 w-full md:w-2/3 mb-4 md:mb-0">
              <span className="text-sm text-indigo-700">New</span>
              <h3 className="text-base font-bold text-gray-900">Hand-Painted Silk Scarf</h3>
              <p className="text-sm text-indigo-700">Design: Floral, Color: Multicolor, Size: 180cm x 45cm</p>
              <button className="mt-2 px-4 py-2 bg-indigo-50 text-gray-900 font-medium text-sm rounded-lg w-fit hover:bg-indigo-100 transition-colors">
                View Request
              </button>
            </div>
            <div className="w-full md:w-1/3 h-48 md:h-40 rounded-lg overflow-hidden">
              <img src="/scarf.png" alt="Hand-Painted Silk Scarf" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
        <section className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Shop Stats</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
            <div className="p-3 lg:p-4 border border-gray-200 rounded-lg">
              <h3 className="text-sm lg:text-base font-medium text-gray-900">Orders</h3>
              <p className="text-lg lg:text-xl font-bold text-gray-900 mt-1 lg:mt-2">125</p>
              <p className="text-sm lg:text-base font-medium text-green-600 mt-1 lg:mt-2">+10%</p>
            </div>

            <div className="p-3 lg:p-4 border border-gray-200 rounded-lg">
              <h3 className="text-sm lg:text-base font-medium text-gray-900">Revenue</h3>
              <p className="text-lg lg:text-xl font-bold text-gray-900 mt-1 lg:mt-2">$5,250</p>
              <p className="text-sm lg:text-base font-medium text-green-600 mt-1 lg:mt-2">+15%</p>
            </div>

            <div className="p-3 lg:p-4 border border-gray-200 rounded-lg">
              <h3 className="text-sm lg:text-base font-medium text-gray-900">Average Order Value</h3>
              <p className="text-lg lg:text-xl font-bold text-gray-900 mt-1 lg:mt-2">$42</p>
              <p className="text-sm lg:text-base font-medium text-red-600 mt-1 lg:mt-2">-5%</p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 lg:mb-4 gap-2">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Inventory Quick Access</h2>
            <button className="px-4 py-2 bg-blue-600 text-white font-bold text-sm rounded-lg w-full sm:w-auto hover:bg-blue-700 transition-colors">
              Add New Item
            </button>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-4 bg-gray-50">
                <div className="p-3">
                  <span className="text-sm font-medium text-gray-900">Item</span>
                </div>
                <div className="p-3">
                  <span className="text-sm font-medium text-gray-900">Stock</span>
                </div>
                <div className="p-3">
                  <span className="text-sm font-medium text-gray-900">Price</span>
                </div>
                <div className="p-3">
                  <span className="text-sm font-medium text-indigo-700">Actions</span>
                </div>
              </div>
              <div className="grid grid-cols-4 border-t border-gray-200">
                <div className="p-3 flex items-center">
                  <span className="text-sm text-gray-900">Embroidered Patches</span>
                </div>
                <div className="p-3 flex items-center">
                  <span className="text-sm text-indigo-700">50</span>
                </div>
                <div className="p-3 flex items-center">
                  <span className="text-sm text-indigo-700">$5</span>
                </div>
                <div className="p-3 flex items-center">
                  <span className="text-sm font-bold text-indigo-700 cursor-pointer hover:underline">Edit</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
