import Web3Image from "../../assets/images/web3-meetup.png";
import InfotechImage from "../../assets/images/infotech.png";
import OYMWGImage from "../../assets/images/oya-make-we-groove.png";
import Pitch2Win from "../../assets/images/pitch-2-win.png";
import OoBirthday from "../../assets/images/oo-birthday.png";
import KcBoys from "../../assets/images/kc-tech.png";
import OyaMakeWeGroove6 from "../../assets/images/oymwg6.png";
import Pitch2Win3 from "../../assets/images/p2w3.png";
import { ArrowRight } from "../../assets/icons";
import { Link } from "react-router";

const PastEvents = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-[20px] justify-center mt-[50px]">
        <div className="w-full md:w-[40%]">
          <h1 className="font-ebGaramond font-[600] text-[36px] md:text-[56px] text-[#800080] leading-[43px] md:leading-[78px] tracking-[-0.04em] text-center md:text-left">
            Our Past Events
          </h1>
          <div className="border border-[#800080] mt-[16px] md:mt-[50px] rounded-[16px] px-[24px] md:px-[47px] py-[46px] md:py-[84px]">
            <div className="flex flex-col items-center space-y-[20px]">
              <img
                src={Web3Image}
                className="hover:scale-105 transition-all duration-500"
                alt=""
              />
              <Link to="web-3-meetup">
                <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[185px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
                  WEB3 MEETUP
                  <ArrowRight />
                </button>
              </Link>
            </div>
            <div className="mt-[30px] flex flex-col items-center space-y-[20px]">
              <img src={InfotechImage} alt="" />
              <Link to="infotech-summit">
                <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[200px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
                  INFOTECH SUMMIT
                  <ArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[60%] flex flex-col justify-center items-center border border-[#800080] rounded-[16px] px-[24px] md:px-[78px] py-[46px] md:py-[75px]">
          <div className="flex flex-col items-center space-y-[20px]">
            <img src={OYMWGImage} alt="" />
            <Link to="oya-make-we-groove-7">
              <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[220px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
                OYAMAKEWEGROVE7
                <ArrowRight />
              </button>
            </Link>
          </div>
          <div className="mt-[30px] flex flex-col items-center space-y-[20px]">
            <img src={Pitch2Win} alt="" />
            <Link to="pitch-2-win-4">
              <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[185px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
                PITCH2WIN4
                <ArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px] gap-y-[30px] border border-[#800080] rounded-[16px] px-[24px] md:px-[80px] py-[46px] md:py-[60px] mt-[30px]">
        <div className="flex flex-col items-center space-y-[20px]">
          <img src={OoBirthday} alt="" />
          <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[220px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
            Oo'S 40TH BIRTHDAY
            <ArrowRight />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-[20px]">
          <img src={KcBoys} alt="" />
          <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[250px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
            KC BOYS TECH EVENT
            <ArrowRight />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-[20px]">
          <img src={OyaMakeWeGroove6} alt="" />
          <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[220px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
            OYAMAKEWEGROVE6
            <ArrowRight />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-[20px]">
          <img src={Pitch2Win3} alt="" />
          <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[220px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
            PITCH2WIN3
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
