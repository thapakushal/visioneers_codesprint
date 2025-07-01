//Reusable request card
const RequestCard = () => {
  const requests = [
    {
      id: 1,
      title: "Local Market",
      product: "Vintage film camera (Pentax)",
      price: "$2.50",
      distance: "0.5 miles",
    },
    {
      id: 2,
      title: "Neighborhood Guitar Shop",
      product: "Electric guitar (turquoise color)",
      price: "$300",
      distance: "0.3 miles",
    },
    {
      id: 3,
      title: "Corner Store",
      product: "Vintage rotary telephone",
      price: "$4.00",
      distance: "0.2 miles",
    },
  ];

  return (
    <div className="space-y-6">
      {requests.map((request) => (
        <div key={request.id} className="bg-white p-4 rounded-xl shadow-sm">
          <div className="mb-4">
            <h3 className="font-bold text-[#0D0F1C]">{request.title}</h3>
            <p className="text-[#47579E] text-sm">
              Product: {request.product}, Price: {request.price}, Distance: {request.distance}
            </p>
          </div>
          <button className="bg-[#E5E8F5] text-[#0D0F1C] text-sm font-medium px-4 py-1 rounded-full flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FFD700] rounded-full"></div>
            Rate this Store
          </button>
        </div>
      ))}
    </div>
  );
};

export default RequestCard;
