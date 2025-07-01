import { FaStar, FaRegStar, FaMapMarkerAlt, FaComment, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-500">Shops</span>
            <span className="text-gray-500">/</span>
            <span className="font-medium">The Corner Store</span>
          </div>
        </div>

        {/* Shop Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-start space-x-6">
              <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-2xl font-bold">The Corner Store</h1>
                <div className="flex items-center space-x-1 text-gray-500">
                  <span>4.5</span>
                  <span>·</span>
                  <span>120 reviews</span>
                  <span>·</span>
                  <span>0.5 Kilometers away</span>
                </div>
                <p className="text-gray-500">Your neighborhood grocery store</p>
              </div>
            </div>
            <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-6 py-2 rounded-full font-bold text-sm transition-colors">
              Contact Store
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Reviews</h2>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Rating Summary */}
            <div className="flex flex-col space-y-3 min-w-[120px]">
              <div className="text-4xl font-extrabold">4.0</div>
              <div className="flex">
                {[...Array(5)].map((_, i) =>
                  i < 4 ? (
                    <FaStar key={i} className="text-yellow-500" size={18} />
                  ) : (
                    <FaRegStar key={i} className="text-yellow-500" size={18} />
                  )
                )}
              </div>
              <div className="text-gray-700">120 reviews</div>
            </div>

            {/* Rating Breakdown */}
            <div className="flex-1 space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-3">
                  <span className="w-4 text-gray-700">{rating}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500"
                      style={{
                        width: `${rating === 5 ? "50%" : rating === 4 ? "30%" : rating === 3 ? "10%" : "5%"}`,
                      }}
                    ></div>
                  </div>
                  <span className="text-gray-500 w-10 text-right">
                    {rating === 5 ? "50%" : rating === 4 ? "30%" : rating === 3 ? "10%" : "5%"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Review List */}
          <div className="space-y-6">
            {/* Review 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 className="font-medium">Sophia Clark</h3>
                  <p className="text-gray-500 text-sm">1 month ago</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" size={18} />
                ))}
              </div>
              <p className="mb-4">
                The Corner Store is a gem! Fresh produce, friendly staff, and a great selection of local goods. Highly
                recommend!
              </p>
              <div className="flex space-x-6 text-gray-500">
                <div className="flex items-center space-x-2">
                  <FaComment size={14} />
                  <span>10</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaThumbsUp size={14} />
                  <span>2</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 className="font-medium">Ethan Miller</h3>
                  <p className="text-gray-500 text-sm">2 months ago</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" size={18} />
                ))}
                <FaRegStar className="text-yellow-500" size={18} />
              </div>
              <p className="mb-4">
                Good store with a decent variety of products. Prices are a bit higher than larger chains, but the
                convenience is worth it.
              </p>
              <div className="flex space-x-6 text-gray-500">
                <div className="flex items-center space-x-2">
                  <FaComment size={14} />
                  <span>5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaThumbsUp size={14} />
                  <span>1</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 className="font-medium">Olivia Davis</h3>
                  <p className="text-gray-500 text-sm">3 months ago</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" size={18} />
                ))}
              </div>
              <p className="mb-4">
                Always a pleasant experience shopping here. The staff is incredibly helpful, and the store is
                well-organized and clean.
              </p>
              <div className="flex space-x-6 text-gray-500">
                <div className="flex items-center space-x-2">
                  <FaComment size={14} />
                  <span>8</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaThumbsUp size={14} />
                  <span>7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Location</h2>
          <div className="h-64 bg-gray-200 rounded-lg mb-3"></div>
          <p className="text-gray-500">
            <FaMapMarkerAlt className="inline mr-2" />
            123 Main Street, Anytown
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
