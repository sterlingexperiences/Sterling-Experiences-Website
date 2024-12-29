import {
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TelephoneIcon,
} from "../../assets/icons";

const Info = () => {
  return (
    <div className="flex items-center gap-[80px] border border-[#800080] rounded-[16px] bg-[#FFFFFF] px-[70px] py-[50px] mb-[60px]">
      <div>
        <img src="" className="w-[500px] h-[489px] bg-red-500" alt="" />
      </div>

      <div className="space-y-[30px]">
        <div className="flex items-center gap-[16px]">
          <TelephoneIcon color="#800080" />
          <p className="font-openSans font-[400] text-[18px] leading-[25px] text-[#0E0E12] tracking-[-0.02em]">
            +234 708 930 0072
          </p>
        </div>
        <div className="flex items-center gap-[16px]">
          <MailIcon color="#800080" />
          <p className="font-openSans font-[400] text-[18px] leading-[25px] text-[#0E0E12] tracking-[-0.02em]">
            sterlingxperience@gmail.com
          </p>
        </div>
        <div className="flex items-center gap-[16px]">
          <p className="font-openSans font-[400] text-[18px] leading-[25px] text-[#0E0E12] tracking-[-0.02em]">
            Follow us on
          </p>
          <InstagramIcon color="#800080" />
          <LinkedinIcon color="#800080" />
        </div>
      </div>
    </div>
  );
};

export default Info;
