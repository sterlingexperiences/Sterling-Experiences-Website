import { Link } from "react-router";
import { ArrowRightWhite } from "../../assets/icons";
import Joy from "../../assets/images/joy.png";

const MeetTheFounder = () => {
  return (
    <div>
      <h1 className="font-ebGaramond text-[36px] md:text-[56px] text-[#800080] font-[600] leading-[43px] md:leading-[78px] tracking-[-0.04em] text-center mt-[64px]">
        Meet Joy Steer Omoro
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[32px] mt-[24px] md:border border-[#800080] bg-[#FFFFFF] rounded-[16px] px-[12px] md:px-[90px] py-[40px] md:py-[90px]">
        <div className="w-full md:w-[30%]">
          <img src={Joy} className="w-full h-full" alt="" />
        </div>

        <div className="w-full md:w-[70%] space-y-[24px]">
          <p className="font-openSans text-[14px] md:text-[18px] text-[#0E0E12] leading-[22px] md:leading-[25px] tracking-[-0.02em]">
            Joy Steer Omoro is a seasoned event professional with a passion for
            creating memorable experiences. With over six years of experience in
            project management and event planning, Joy has successfully led
            numerous projects in both the non-profit and corporate sectors. Her
            expertise lies in crafting innovative and impactful events that
            leave a lasting impression.
          </p>
          <p className="font-openSans text-[14px] md:text-[18px] text-[#0E0E12] leading-[22px] md:leading-[25px] tracking-[-0.02em]">
            As the founder of Sterling Experiences, Joy is dedicated to
            delivering exceptional event solutions tailored to the specific
            needs of each client. Her commitment to excellence, attention to
            detail, and collaborative approach have made her a trusted partner
            for businesses across various industries.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/services"
              className="flex items-center justify-center gap-[8px] text-[#F6F1E5] bg-[#800080] px-[16px] rounded-[16px] md:w-[400px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]"
            >
              Explore Services
              <ArrowRightWhite />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheFounder;
