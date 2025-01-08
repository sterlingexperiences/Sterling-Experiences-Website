import HeroImage from "../../assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className="flex justify-between items-center py-[70px]">
      <div className="font-openSans">
        <h1 className="font-[600] text-[56px] leading-[78px] tracking-[-0.04em] font-ebGaramond">
          Creating Sterling Experiences
        </h1>
        <p className="mt-[10px] font-[400] text-[24px] leading-[33px] tracking-[-0.02em]">
          Shaping the Future of Corporate Events.
        </p>
        <button>Schedule free consultation</button>
      </div>

      <div className="">
        <img src={HeroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
