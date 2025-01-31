import ContactImage from "../../assets/images/contact.png";

import {
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TelephoneIcon,
} from "../../assets/icons";

const Info = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-[80px] border border-[#800080] rounded-[16px] bg-[#FFFFFF] px-[24px] md:px-[70px] py-[50px] mb-[60px]">
      <div>
        <img src={ContactImage} alt="" />
      </div>

      <div className="space-y-[30px]">
        <div>
          <a href="tel:+2347089300072" className="hover:underline">
            <div className="flex items-center gap-[16px]">
              <TelephoneIcon color="#800080" />
              <p className="font-openSans font-[400] text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] text-[#0E0E12] tracking-[-0.02em]">
                +234 708 930 0072
              </p>
            </div>
          </a>
        </div>
        <div>
          <a
            href="mailto:joy@sterlingxperiences.com"
            className="hover:underline"
          >
            <div className="flex items-center gap-[16px]">
              <MailIcon color="#800080" />
              <p className="font-openSans font-[400] text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] text-[#0E0E12] tracking-[-0.02em]">
                joy@sterlingxperiences.com
              </p>
            </div>
          </a>
        </div>
        <div className="flex items-center gap-[16px]">
          <p className="font-openSans font-[400] text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] text-[#0E0E12] tracking-[-0.02em]">
            Follow us on
          </p>
          <a
            href="https://www.instagram.com/sterling_experiences"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon color="#800080" />
          </a>
          <a
            href="https://www.linkedin.com/company/sterling-xperiences/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon color="#800080" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
