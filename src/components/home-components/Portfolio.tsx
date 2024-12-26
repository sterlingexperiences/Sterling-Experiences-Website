import { ArrowRight } from "../../assets/icons";

const Portfolio = () => {
  return (
    <div className="mt-[64px]">
      <h1 className="font-ebGaramond font-[600] text-[56px] text-[#800080] leading-[78px] tracking-[-0.04em] mb-[30px] text-center">
        Portfolio
      </h1>

      <div className="flex items-center justify-center gap-[24px] py-[89px] px-[60px] border border-[#800080] bg-[#FFFFFF] rounded-[16px]">
        <img src="" className="w-full h-[386px] bg-red-500" alt="" />
        <img src="" className="w-full h-[386px] bg-red-500" alt="" />
        <img src="" className="w-full h-[386px] bg-red-500" alt="" />
      </div>

      <div className="flex items-center justify-center mt-[30px]">
        <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[408px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]]">
          See more
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
