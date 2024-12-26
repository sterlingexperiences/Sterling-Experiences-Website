import { ArrowRight } from "../../assets/icons";

const OurExpertise = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-[32px]">
        <div className="w-[252px] h-[2px] bg-[#FFD700]" />
        <h1 className="font-ebGaramond font-[600] text-[56px] text-[#800080] leading-[78px] tracking-[-0.04em]">
          Our Expertise
        </h1>
        <div className="w-[252px] h-[2px] bg-[#FFD700]" />
      </div>

      <div className="flex items-center justify-center gap-[45px]">
        <div className="flex flex-col space-y-[24px]">
          <h1 className="flex items-center justify-center bg-[#800080] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#F6F1E5] leading-[39px] tracking-[-0.02em]">
            Cooperate Retreats
          </h1>
          <h1 className="flex items-center justify-center bg-[#800080] rounded-[16px] w-[368px] h-[132px] font-openSans font-[600] text-[28px] text-[#F6F1E5] leading-[39px] tracking-[-0.02em]">
            Product Launchs
          </h1>
        </div>

        <div className="flex flex-col items-center space-y-[20px]">
          <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[185px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
            Explore Services
            <ArrowRight />
          </button>
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
    </div>
  );
};

export default OurExpertise;
