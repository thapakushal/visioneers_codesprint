import { FiPaperclip } from "react-icons/fi";
import RequestCard from "./cards/RequestCard"; 

const UserDashboard = () => {
  return (
    <div className="flex flex-col items-start p-0 w-full max-w-7xl mx-auto bg-white min-h-screen">
      <div className="w-full p-5 md:p-10 bg-[#F7FAFC] flex-1">
        <h1 className="text-2xl md:text-[28px] font-bold leading-[35px] text-[#0D0F1C] mb-6">
          What are you looking for today?
        </h1>

        <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-8">
          <div className="w-full md:w-[448px] h-14 bg-[#E8F0F5] rounded-xl flex items-center px-4">
            <input
              type="text"
              placeholder="Product name"
              className="bg-transparent outline-none text-[#0D0F1C] placeholder-[#4A879C] text-base w-full"
            />
          </div>
          <div className="w-full md:w-[448px] h-14 bg-[#E8F0F5] rounded-xl flex items-center px-4">
            <input
              type="number"
              placeholder="Quantity"
              className="bg-transparent outline-none text-[#0D0F1C] placeholder-[#4A879C] text-base w-full"
            />
          </div>
          <div className="w-full md:w-[384px] h-14 bg-[#E8F0F5] rounded-xl flex items-center px-4">
            <select
              className="bg-transparent outline-none text-[#0D0F1C] placeholder-[#4A879C] text-base w-full"
              defaultValue=""
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="books">Books</option>
              <option value="clothing">Clothing</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="w-full md:w-[295px] h-20 bg-[#E8F0F5] rounded-xl flex items-center px-4">
            <textarea
              placeholder="Description"
              className="bg-transparent outline-none text-[#0D0F1C] placeholder-[#4A879C] text-base w-full resize-none"
              rows={2}
            />
          </div>
          <label
            htmlFor="fileInput"
            className="w-full md:w-[131px] h-20 bg-[#E8F0F5] rounded-xl flex items-center px-4 gap-2 cursor-pointer"
          >
            <FiPaperclip className="text-[#988CA9] w-6 h-6" />
            <span className="text-[#4A879C] text-base">Attach Photos</span>
            <input id="fileInput" type="file" className="hidden" multiple />
          </label>
        </div>

        <div className="flex justify-end mb-8">
          <button className="bg-[#617AFA] text-[#F7FAFC] font-bold text-sm px-6 py-2 rounded-full">Post Request</button>
        </div>

        <hr className="border-[#E6E8EB] my-6" />

        <h2 className="text-xl md:text-[22px] font-bold leading-[28px] text-[#0D0F1C] mb-6">
          Recently Completed Requests
        </h2>

        <RequestCard />
      </div>
    </div>
  );
};

export default UserDashboard;
