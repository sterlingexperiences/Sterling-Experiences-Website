import { useNavigate } from "react-router";
import { BackButton } from "../../assets/icons";
import P2w41 from "../../assets/images/p2w4-1.png";
import P2w42 from "../../assets/images/p2w4-2.png";
import P2w43 from "../../assets/images/p2w4-3.png";
import P2w44 from "../../assets/images/p2w4-4.png";
import P2w45 from "../../assets/images/p2w4-5.png";
import P2w46 from "../../assets/images/p2w4-6.png";
import P2w47 from "../../assets/images/p2w4-7.png";
import P2w48 from "../../assets/images/p2w4-8.png";

const ImageList = [P2w41, P2w42, P2w43, P2w44, P2w45, P2w46, P2w47, P2w48];

const Pitch2Win4 = () => {
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
          Pitch2Win4
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[#800080] rounded-[16px] px-[24px] md:px-[94px] py-[46px] md:py-[94px] gap-x-[113px] gap-y-[24px] md:gap-y-[80px] w-full">
        {ImageList.map((image, index) => (
          <div key={index} className="mx-auto">
            <img
              src={image}
              className="hover:scale-105 transition-all duration-500"
              alt="pitch2win4"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Pitch2Win4;
