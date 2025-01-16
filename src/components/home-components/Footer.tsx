import WhiteLogo from "../../assets/images/sterling-experiences-logo-white.png";
import {
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TelephoneIcon,
} from "../../assets/icons";

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-[#800080]">
      <div className="flex flex-col md:flex-row items-center justify-between py-[40px] w-full max-w-[1300px] px-4 ">
        <div className="flex flex-col items-center gap-[26px]">
          <img src={WhiteLogo} alt="" />
          <div className="flex gap-[16px] ml-[50px]">
            <InstagramIcon />
            <LinkedinIcon />
            <TelephoneIcon />
            <MailIcon />
          </div>
        </div>

        <div className="space-y-[16px]">
          <h1 className="font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[48px] text-[#FFD700] leading-[43px] md:leading-[57px] tracking-[-0.04em] text-center md:text-left">
            Sign up for our Newsletter
          </h1>
          <div className="flex flex-col space-y-[8px]">
            <label
              className="font-openSans font-[400] text-[16px] leading-[22px] tracking-[-0.02em] text-[#F6F1E5]"
              htmlFor="email"
            >
              Email Adress
            </label>

            <div className="flex relative">
              <input
                className="w-full h-[51px] rounded-[16px] px-[20px]"
                type="email"
                name="email"
                id="email"
              />
              <button className="absolute right-[11px] top-[7px] h-[38px] flex items-center justify-center bg-[#800080] text-[#F6F1E5] px-[16px] py-[8px] rounded-[16px]">
                Submit
              </button>
            </div>
          </div>

          <p className="font-openSans font-[400] text-[16px] leading-[25px] tracking-[-0.02em] text-[#F6F1E5]">
            Copyright &copy; {new Date().getFullYear()} Sterling Experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
