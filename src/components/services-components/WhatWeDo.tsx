const WhatWeDo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-[64px] bg-[#FFFFFF] px-[14px] py-[80px] whatWeDo_bg">
      <div className="flex flex-col border border-[#800080] rounded-[16px] px-[62px] py-[78px] max-w-[524px] bg-white">
        <h1 className="font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[48px] text-[#0E0E12] leading-[43px] md:leading-[57px] tracking-[-0.04em] px-[25px]">
          Event Management and Production
        </h1>
        <div className="h-[2px] bg-[#0E0E12] my-[24px]" />
        <ul className="font-openSans font-[400] text-[16px] md:text-[24px] space-y-[24px] text-[#0E0E12] leading-[22px] md:leading-[33px] tracking-[-0.02em] px-[25px]">
          <li>Event Conceptualization</li>
          <li>Event Planning</li>
          <li>Venue Selection Management</li>
          <li>Event Evaluation and Reporting</li>
        </ul>
        <button className="bg-[#800080] flex items-center justify-center h-[38px] md:w-[408px] font-[600] text-[16px] leading-[22px] tracking-[-0.02em] text-[#F6F1E5] rounded-[16px] mt-[30px]">
          Start planning
        </button>
      </div>

      <div className="flex flex-col border border-[#800080] rounded-[16px] px-[62px] py-[78px] max-w-[524px] bg-white">
        <h1 className="font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[48px] text-[#0E0E12] leading-[43px] md:leading-[57px] tracking-[-0.04em] px-[25px]">
          Add-ons
        </h1>
        <div className="h-[2px] bg-[#0E0E12] my-[24px]" />
        <ul className="font-openSans font-[400] text-[16px] md:text-[24px] space-y-[24px] text-[#0E0E12] leading-[22px] md:leading-[33px] tracking-[-0.02em] px-[25px]">
          <li>Corporate Gifting</li>
          <li>Destination Management</li>
        </ul>
        <button className="bg-[#800080] flex items-center justify-center h-[38px] md:w-[408px] font-[600] text-[16px] leading-[22px] tracking-[-0.02em] text-[#F6F1E5] rounded-[16px] mt-[30px]">
          Start planning
        </button>
      </div>
    </div>
  );
};

export default WhatWeDo;
