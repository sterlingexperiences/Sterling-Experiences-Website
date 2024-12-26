import {
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TelephoneIcon,
} from "../../assets/icons";

const Footer = () => {
  return (
    <div className="flex items-center justify-between py-[40px] bg-[#800080]">
      <div className="flex gap-[16px]">
        <InstagramIcon />
        <LinkedinIcon />
        <TelephoneIcon />
        <MailIcon />
      </div>

      <div className="space-y-[16px]">
        <h1 className="font-ebGaramond font-[600] text-[48px] text-[#FFD700] leading-[57px] tracking-[-0.04em]">
          Sign up for our Newsletter
        </h1>
        <div className="flex flex-col space-y-[8px]">
          <label
            className="font-openSans font-[400] text-[16px] leading-[22px] tracking-[-0.02em]"
            htmlFor="email"
          >
            Email Adress
          </label>
          <input
            className="h-[51px] rounded-[16px] px-[20px]"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <p>Copyright &copy; {new Date().getFullYear()} Sterling Experiences</p>
      </div>
    </div>
  );
};

export default Footer;
