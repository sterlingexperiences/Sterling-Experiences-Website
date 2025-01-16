import { useNavigate } from "react-router";
import { BackButton } from "../../assets/icons";
import P2w31 from "../../assets/images/p2w3-1.png";
import P2w32 from "../../assets/images/p2w3-2.png";
import P2w33 from "../../assets/images/p2w3-3.png";
import P2w34 from "../../assets/images/p2w3-4.png";
import P2w35 from "../../assets/images/p2w3-5.png";
import P2w36 from "../../assets/images/p2w3-6.png";
import P2w37 from "../../assets/images/p2w3-7.png";
import P2w38 from "../../assets/images/p2w3-8.png";

const ImageList = [P2w31, P2w32, P2w33, P2w34, P2w35, P2w36, P2w37, P2w38];

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
          Pitch2Win3
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[#800080] rounded-[16px] px-[24px] md:px-[94px] py-[46px] md:py-[94px] gap-x-[113px] gap-y-[24px] md:gap-y-[80px] w-full">
        {ImageList.map((image, index) => (
          <div key={index} className="mx-auto">
            <img
              src={image}
              className="hover:scale-105 transition-all duration-500"
              alt="Pitch2Win3"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Web3Meetup;
