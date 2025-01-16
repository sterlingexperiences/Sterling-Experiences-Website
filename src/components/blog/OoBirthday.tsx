import { useNavigate } from "react-router";
import { BackButton } from "../../assets/icons";
import Oo1 from "../../assets/images/oo-1.png";
import Oo2 from "../../assets/images/oo-2.png";
import Oo3 from "../../assets/images/oo-3.png";
import Oo4 from "../../assets/images/oo-4.png";
import Oo5 from "../../assets/images/oo-5.png";
import Oo6 from "../../assets/images/oo-6.png";
import Oo7 from "../../assets/images/oo-7.png";
import Oo8 from "../../assets/images/oo-8.png";

const ImageList = [Oo1, Oo2, Oo3, Oo4, Oo5, Oo6, Oo7, Oo8];

const OoBirthday = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative flex items-center justify-center mt-[35px] md:mt-[60px] mb-[22px] md:mb-[40px]">
        <div
          onClick={() => navigate(-1)}
          className="absolute left-0 hover:cursor-pointer"
        >
          <BackButton />
        </div>
        <h1 className="font-ebGaramond font-[600] text-[36px] md:text-[56px] text-[#800080] leading-[43px] md:leading-[78px] tracking-[-0.04em] text-center">
          Oo's 40th Birthday
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[#800080] rounded-[16px] px-[24px] md:px-[94px] py-[46px] md:py-[94px] gap-x-[113px] gap-y-[24px] md:gap-y-[80px] w-full">
        {ImageList.map((image, index) => (
          <div key={index} className="mx-auto">
            <img
              src={image}
              className="hover:scale-105 transition-all duration-500"
              alt="oo's 40th birthday"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default OoBirthday;
