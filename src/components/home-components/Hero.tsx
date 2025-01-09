import HeroImage from "../../assets/images/hero-image.png";
import Crown from "../../assets/images/crown.png";
import { StarIcon } from "../../assets/icons";

const Hero = () => {
  return (
    <div className="flex justify-between items-center py-[70px]">
      <div className="font-openSans relative ml-[10%]">
        <img
          src={Crown}
          className="absolute bottom-[50%] right-[80%] hover:rotate-[15deg] transition-all duration-1000 ease-in-out"
          alt=""
        />
        <span className="absolute bottom-[120%] left-[80%] hover:left-[100%] hover:scale-150 transition-all duration-1000 ease-in-out">
          <StarIcon color="#FFD700" />
        </span>
        <h1 className="font-[600] text-[56px] text-[#800080] leading-[78px] tracking-[-0.04em] font-ebGaramond">
          Creating Sterling Experiences
        </h1>
        <p className="mt-[10px] font-[400] text-[24px] text-[#0E0E12] leading-[33px] tracking-[-0.02em]">
          Shaping the Future of Corporate Events.
        </p>
        <button className="bg-[#800080] flex items-center justify-center h-[38px] w-[408px] font-[600] text-[16px] leading-[22px] tracking-[-0.02em] text-[#F6F1E5] rounded-[16px] mt-[16px]">
          Schedule free consultation
        </button>
      </div>

      <div className="">
        <img src={HeroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
