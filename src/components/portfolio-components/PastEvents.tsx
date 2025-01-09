import Web3Image from "../../assets/images/web3-meetup.png";
import InfotechImage from "../../assets/images/infotech.png";
import OYMWGImage from "../../assets/images/oya-make-we-groove.png";
import Pitch2Win from "../../assets/images/pitch-2-win.png";
import OoBirthday from "../../assets/images/oo-birthday.png";
import KcBoys from "../../assets/images/kc-tech.png";
import OyaMakeWeGroove6 from "../../assets/images/oymwg6.png";
import Pitch2Win3 from "../../assets/images/p2w3.png";
import { ArrowRight } from "../../assets/icons";

const PastEvents = () => {
  return (
    <div>
      <div className="flex gap-[20px] justify-center mt-[50px]">
        <div className="w-[40%]">
          <h1 className="font-ebGaramond font-[600] text-[56px] text-[#800080] leading-[78px] tracking-[-0.04em]">
            Our Past Events
          </h1>
          <div className="border border-[#800080] rounded-[16px] px-[47px] py-[84px]">
            <div className="flex flex-col items-center space-y-[20px]">
              <img src={Web3Image} alt="" />
              <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[185px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
                WEB3 MEETUP
                <ArrowRight />
              </button>
            </div>
            <div className="mt-[30px] flex flex-col items-center space-y-[20px]">
              <img src={InfotechImage} alt="" />
              <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[200px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
                INFOTECH SUMMIT
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[60%] flex flex-col justify-center items-center border border-[#800080] rounded-[16px] px-[78px] py-[75px]">
          <div className="flex flex-col items-center space-y-[20px]">
            <img src={OYMWGImage} alt="" />
            <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[220px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
              OYAMAKEWEGROVE7
              <ArrowRight />
            </button>
          </div>
          <div className="mt-[30px] flex flex-col items-center space-y-[20px]">
            <img src={Pitch2Win} alt="" />
            <button className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[185px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
              PITCH2WIN4
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-[100px] gap-y-[30px] border border-[#800080] rounded-[16px] px-[80px] py-[60px] mt-[30px]">
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
