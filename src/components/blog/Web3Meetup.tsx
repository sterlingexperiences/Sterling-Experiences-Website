import { useNavigate } from "react-router";
import { BackButton } from "../../assets/icons";
import Web31 from "../../assets/images/web-3-1.png";
import Web32 from "../../assets/images/web-3-2.png";
import Web33 from "../../assets/images/web-3-3.png";
import Web34 from "../../assets/images/web-3-4.png";
import Web35 from "../../assets/images/web-3-5.png";
import Web36 from "../../assets/images/web-3-6.png";
import Web37 from "../../assets/images/web-3-7.png";
import Web38 from "../../assets/images/web-3-8.png";

const ImageList = [Web31, Web32, Web33, Web34, Web35, Web36, Web37, Web38];

const Web3Meetup = () => {
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
          Web3 Meetup
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[#800080] rounded-[16px] px-[24px] md:px-[94px] py-[46px] md:py-[94px] gap-x-[113px] gap-y-[24px] md:gap-y-[80px] w-full">
        {ImageList.map((image, index) => (
          <div key={index} className="mx-auto">
            <img
              src={image}
              className="hover:scale-105 transition-all duration-500"
              alt="web3 meetup"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Web3Meetup;
