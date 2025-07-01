import { Link } from "react-router-dom";

const RegisterOptionPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7FAFC]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="flex justify-between items-center p-3 px-4 sm:px-10 h-12 border-b border-[#E6E8EB]">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-[#0D0F1C]"></div>
          <div className="font-bold text-lg text-[#0D0F1C]">Grabbit</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 sm:p-5 sm:px-10 flex-grow">
        <div className="w-full max-w-[960px] text-center mb-8">
          <h1 className="font-bold text-2xl sm:text-[28px] leading-[35px] text-[#0D0F1C]">Register for Grabbit</h1>
        </div>
        <div className="w-full max-w-[480px] space-y-6">
          <Link
            to="/register/user"
            className=" w-full h-[75px] bg-[#617AFA] rounded-lg flex items-center justify-center hover:bg-[#5168DA] transition-colors"
          >
            <span className="text-[#F7FAFC] font-bold text-base sm:text-[16px] leading-[24px]">I am user</span>
          </Link>
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-[#E6E8EB]"></div>
            <span className="flex-shrink mx-4 text-[#47579E] text-sm">or</span>
            <div className="flex-grow border-t border-[#E6E8EB]"></div>
          </div>
          <Link
            to="/register/shop"
            className=" w-full h-[86px] sm:h-[75px] bg-[#E6E8F5] rounded-lg flex items-center justify-center hover:bg-[#D6D8E5] transition-colors"
          >
            <span className="text-[#0D0F1C] font-bold text-sm sm:text-[16px] leading-[21px] sm:leading-[24px]">
              I am Shop
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterOptionPage;
