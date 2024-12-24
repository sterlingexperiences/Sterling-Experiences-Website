const Hero = () => {
  return (
    <div className="flex">
      <div className="w-[60%] font-openSans">
        <h1 className="font-[600] text-[56px] leading-[78px] tracking-[-4%] font-ebGaramond">
          Creating Sterling Experiences
        </h1>
        <p className="mt-[10px] font-[400] text-[24px] leading-[33px] tracking-[-2%]">
          Shaping the Future of Corporate Events.
        </p>
        <button>Schedule free consultation</button>
      </div>

      <div className="w-[40%]">
        <div className="w-full h-[370px] bg-[#800080B2]" />
      </div>
    </div>
  );
};

export default Hero;
