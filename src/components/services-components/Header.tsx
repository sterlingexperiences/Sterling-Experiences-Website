const Header = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="font-ebGaramond text-[56px] font-[600] leading-[78px] text-[#800080] mt-[60px] tracking-[-0.04em]">
        We Create Sterling Experiences
      </h1>
      <p className="font-openSans text-[18px] text-[#0E0E12] leading-[25px] tracking-[-0.02em] mt-[20px]">
        We believe in a collaborative approach, working closely with our clients
        to understand their specific needs and preferences. We are committed to
        delivering personalized and memorable experiences that exceed
        expectations.
      </p>
      <p className="font-openSans text-[18px] text-[#0E0E12] leading-[25px] tracking-[-0.02em] mt-[40px]">
        We do not offer fixed pricing and packaging. Your event is unique, and
        so is our approach.  Let's discuss your specific requirements and create
        a customized plan that aligns with your budget and goals
      </p>

      <div className="flex items-center justify-center gap-[32px] mt-[60px] mb-[40px]">
        <div className="w-[252px] h-[2px] bg-[#FFD700]" />
        <h1 className="font-ebGaramond font-[600] text-[56px] text-[#800080] leading-[78px] tracking-[-0.04em]">
          What do we do?
        </h1>
        <div className="w-[252px] h-[2px] bg-[#FFD700]" />
      </div>
    </div>
  );
};

export default Header;
