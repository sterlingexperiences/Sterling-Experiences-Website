import { useNavigate } from "react-router";
import { BackButton } from "../../assets/icons";
import Kc1 from "../../assets/images/kc-1.png";
import Kc2 from "../../assets/images/kc-2.png";
import Kc3 from "../../assets/images/kc-3.png";
import Kc4 from "../../assets/images/kc-4.png";
import Kc5 from "../../assets/images/kc-5.png";
import Kc6 from "../../assets/images/kc-6.png";
import Kc7 from "../../assets/images/kc-7.png";
import Kc8 from "../../assets/images/kc-8.png";

const ImageList = [Kc1, Kc2, Kc3, Kc4, Kc5, Kc6, Kc7, Kc8];

const KcBoys = () => {
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
          KC Boys Tech Event
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[#800080] rounded-[16px] px-[24px] md:px-[94px] py-[46px] md:py-[94px] gap-x-[113px] gap-y-[24px] md:gap-y-[80px] w-full">
        {ImageList.map((image, index) => (
          <div key={index} className="mx-auto">
            <img
              src={image}
              className="hover:scale-105 transition-all duration-500"
              alt="KC boys tech event"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default KcBoys;
