import { useNavigate } from "react-router";
import { BackButton } from "../../assets/icons";
import Omwg1 from "../../assets/images/omwg7-1.png";
import Omwg2 from "../../assets/images/omwg7-2.png";
import Omwg3 from "../../assets/images/omwg7-3.png";
import Omwg4 from "../../assets/images/omwg7-4.png";
import Omwg5 from "../../assets/images/omwg7-5.png";
import Omwg6 from "../../assets/images/omwg7-6.png";
import Omwg77 from "../../assets/images/omwg7-7.png";
import Omwg8 from "../../assets/images/omwg7-8.png";

const ImageList = [Omwg1, Omwg2, Omwg3, Omwg4, Omwg5, Omwg6, Omwg77, Omwg8];

const Omwg7 = () => {
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
          OyaMakeWeGroove7
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[#800080] rounded-[16px] px-[24px] md:px-[94px] py-[46px] md:py-[94px] gap-x-[113px] gap-y-[24px] md:gap-y-[80px] w-full">
        {ImageList.map((image, index) => (
          <div key={index} className="mx-auto">
            <img
              src={image}
              className="hover:scale-105 transition-all duration-500"
              alt="oya make we groove 7"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Omwg7;
