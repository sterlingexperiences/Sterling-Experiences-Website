import { useNavigate } from "react-router";
import { BackButton } from "../../assets/icons";
import Omwg61 from "../../assets/images/omwg6-1.png";
import Omwg62 from "../../assets/images/omwg6-2.png";
import Omwg63 from "../../assets/images/omwg6-3.png";
import Omwg64 from "../../assets/images/omwg6-4.png";
import Omwg65 from "../../assets/images/omwg6-5.png";
import Omwg66 from "../../assets/images/omwg6-6.png";
import Omwg67 from "../../assets/images/omwg6-7.png";
import Omwg68 from "../../assets/images/omwg6-8.png";

const ImageList = [
  Omwg61,
  Omwg62,
  Omwg63,
  Omwg64,
  Omwg65,
  Omwg66,
  Omwg67,
  Omwg68,
];

const Omwg6 = () => {
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
          OyaMakeWeGroove6
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[#800080] rounded-[16px] px-[24px] md:px-[94px] py-[46px] md:py-[94px] gap-x-[113px] gap-y-[24px] md:gap-y-[80px] w-full">
        {ImageList.map((image, index) => (
          <div key={index} className="mx-auto">
            <img
              src={image}
              className="hover:scale-105 transition-all duration-500"
              alt="Oya-Make-We-Groove-6"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Omwg6;
