import { Link } from "react-router";
import { ArrowRight } from "../../assets/icons";

const OurExpertise = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-[32px]">
        <div className="w-full max-w-[252px] h-[2px] bg-[#FFD700]" />
        <h1 className="font-ebGaramond whitespace-nowrap font-[500] md:font-[600] text-[36px] md:text-[56px] text-[#800080] leading-[43px] md:leading-[78px] tracking-[-0.04em]">
          Our Expertise
        </h1>
        <div className="w-full max-w-[252px] h-[2px] bg-[#FFD700]" />
      </div>

      <div className="hidden lg:flex items-center justify-center gap-[45px]">
        <div className="flex flex-col space-y-[24px]">
          <h1 className="flex items-center justify-center bg-[#800080] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#F6F1E5] leading-[39px] tracking-[-0.02em]">
            Cooperate Retreats
          </h1>
          <h1 className="flex items-center justify-center bg-[#800080] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#F6F1E5] leading-[39px] tracking-[-0.02em]">
            Product Launchs
          </h1>
        </div>

        <div className="flex flex-col items-center space-y-[20px]">
          <Link to="services">
            <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[185px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
              Explore Services
              <ArrowRight />
            </button>
          </Link>
          <h1 className="flex items-center justify-center bg-[#FFD700] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#800080] leading-[39px] tracking-[-0.02em]">
            Conferences & Seminars
          </h1>
        </div>

        <div className="flex flex-col space-y-[24px]">
          <h1 className="flex items-center justify-center bg-[#800080] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#F6F1E5] leading-[39px] tracking-[-0.02em]">
            Team Building Events
          </h1>
          <h1 className="flex items-center justify-center bg-[#800080] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#F6F1E5] leading-[39px] tracking-[-0.02em]">
            Tours/Destination/Trips
          </h1>
        </div>
      </div>

      {/* mobile */}
      <div className="flex flex-col space-y-[12px] mt-[16px] lg:hidden">
        <h1 className="flex items-center justify-center bg-[#800080] rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-[#F6F1E5] leading-[25px] tracking-[-0.02em]">
          Cooperate Retreats
        </h1>
        <h1 className="flex items-center justify-center bg-[#800080] rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-[#F6F1E5] leading-[25px] tracking-[-0.02em]">
          Product Launchs
        </h1>
        <h1 className="flex items-center justify-center bg-[#FFD700] rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-[#800080] leading-[25px] tracking-[-0.02em]">
          Conferences & Seminars
        </h1>
        <h1 className="flex items-center justify-center bg-[#800080] rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-[#F6F1E5] leading-[25px] tracking-[-0.02em]">
          Team Building Events
        </h1>
        <h1 className="flex items-center justify-center bg-[#800080] rounded-[16px] w-full h-[60px] font-openSans font-[600] text-[18px] text-[#F6F1E5] leading-[25px] tracking-[-0.02em]">
          Tours/Destination/Trips
        </h1>
        <div className="flex items-center justify-center">
          <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[185px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em] mt-[16px]">
            Explore Services
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
