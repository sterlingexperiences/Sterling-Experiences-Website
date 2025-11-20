import { Link } from "react-router";
import StaffingImage from "../../assets/images/staffing.png";

const EventStaffing = () => {
  return (
    <div className="flex flex-col-reverse gap-[20px] md:gap-[200px] md:px-[30px] md:flex-row justify-between items-center mt-[64px]">
      <div className="flex items-center gap-[40px] justify-between">
        <div className="space-y-[24px]">
          <h1 className="relative text-center md:text-left font-ebGaramond text-[36px] md:text-[56px] text-[#800080] font-[600] leading-[43px] md:leading-[78px] tracking-[-0.04em]">
            Sterling Events Staffing
          </h1>
          <p className="font-openSans text-center md:text-left text-[14px] md:text-[18px] text-[#0E0E12] leading-[22px] md:leading-[25px] tracking-[-0.02em]">
            We provide top-tier, professional, and well-trained event staff for
            all kinds of events across Nigeria
          </p>
          <div className="mt-[40px] flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
            <Link to="about-us">
              <button className="bg-[#800080] flex items-center px-[16px] justify-center h-[38px] w-[200px] font-[600] text-[16px] leading-[22px] tracking-[-0.02em] text-[#F6F1E5] rounded-[16px] hover:bg-[#a22ca2] transition-all duration-300 ease-in-out">
                Hire event staff
              </button>
            </Link>
            <Link to="about-us">
              <button className="bg-[#F6F1E5] flex items-center px-[16px] justify-center h-[38px] w-[200px] font-[600] text-[16px] leading-[22px] tracking-[-0.02em] text-[#800080] rounded-[16px] hover:text-[#F6F1E5] hover:bg-[#a22ca2] transition-all duration-300 ease-in-out border border-[#800080]">
                Join our event staff
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="font-openSans max-w-[385px]">
        <img src={StaffingImage} alt="" />
      </div>
    </div>
  );
};

export default EventStaffing;
