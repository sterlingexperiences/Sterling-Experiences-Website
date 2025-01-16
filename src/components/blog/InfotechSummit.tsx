import { useNavigate } from "react-router";
import { BackButton } from "../../assets/icons";
import Infotech1 from "../../assets/images/infotech-1.png";
import Infotech2 from "../../assets/images/infotech-2.png";
import Infotech3 from "../../assets/images/infotech-3.png";
import Infotech4 from "../../assets/images/infotech-4.png";
import Infotech5 from "../../assets/images/infotech-5.png";
import Infotech6 from "../../assets/images/infotech-6.png";
import Infotech7 from "../../assets/images/infotech-7.png";
import Infotech8 from "../../assets/images/infotech-8.png";

const ImageList = [
  Infotech1,
  Infotech2,
  Infotech3,
  Infotech4,
  Infotech5,
  Infotech6,
  Infotech7,
  Infotech8,
];

const InfotechSummit = () => {
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
          Infotech Summit
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[#800080] rounded-[16px] px-[24px] md:px-[94px] py-[46px] md:py-[94px] gap-x-[113px] gap-y-[24px] md:gap-y-[80px] w-full">
        {ImageList.map((image, index) => (
          <div key={index} className="mx-auto">
            <img
              src={image}
              className="hover:scale-105 transition-all duration-500"
              alt="infotech summit"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default InfotechSummit;
