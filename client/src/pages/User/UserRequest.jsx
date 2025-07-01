import { FiChevronDown, FiFilter, FiMapPin } from "react-icons/fi";

// ResponseCard component
const ResponseCard = ({ time, name, details, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 bg-white rounded-lg shadow-sm">
      <div className="flex-1 mb-4 md:mb-0">
        <p className="text-sm text-gray-600 mb-1">{time}</p>
        <h3 className="text-base font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{details}</p>
      </div>
      {imageUrl && (
        <div className="w-full md:w-80 h-40 bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

const UserRequestPage = () => {
  const responses = [
    { 
      time: "10 min ago", 
      name: "The Daily Grind", 
      details: "Available, $12.50, 1.2 miles away",
      imageUrl: "/requser1.png" 
    },
    { 
      time: "25 min ago", 
      name: "Bean There, Done That", 
      details: "Available, $13.00, 2.5 miles away",
      imageUrl: "/requser2.png" 
    },
    { 
      time: "1 hr ago", 
      name: "The Coffee Corner", 
      details: "Available, $12.00, 0.8 miles away",
      imageUrl: "/requser3.png" 
    },
    { 
      time: "2 hr ago", 
      name: "Brewtiful Beans", 
      details: "Available, $12.75, 1.5 miles away",
      imageUrl: "/requser4.png" 
    },
    { 
      time: "3 hr ago", 
      name: "The Bean Scene", 
      details: "Available, $13.50, 3.0 miles away",
      imageUrl: "/requser5.png" 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Request for 200g of organic coffee beans
        </h1>
        <p className="text-sm text-gray-600">Posted 2 days ago</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Responses</h2>
        <div className="flex flex-wrap gap-3 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-900">
            Sort <FiChevronDown />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-900">
            Filter <FiFilter />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-900">
            Map <FiMapPin />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {responses.map((response, index) => (
          <ResponseCard
            key={index}
            time={response.time}
            name={response.name}
            details={response.details}
            imageUrl={response.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default UserRequestPage;