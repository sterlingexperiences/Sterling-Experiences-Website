import WhiteLogo from "../../assets/images/sterling-experiences-logo-white.png";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TelephoneIcon,
} from "../../assets/icons";
import { useState } from "react";
import { supabase } from "../../Supabase";
import { toast, ToastContainer } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase
        .from("Waitlist")
        .insert({ email: email });

      if (error) {
        toast.error("Failed to submit. Please try again later.");
        setLoading(false);
        return;
      }
      toast.success("Successfully subscribed to newsletter!");
      setLoading(false);
      setEmail("");
    } catch (err) {
      toast.error("An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#800080]">
      <div className="flex flex-col md:flex-row items-center justify-between py-[40px] w-full max-w-[1300px] px-4 ">
        <div className="flex flex-col items-center gap-[26px]">
          <img src={WhiteLogo} className="hidden md:block" alt="" />
          <div className="flex items-center gap-[16px] md:ml-[50px]">
            <a
              href="https://www.instagram.com/sterling_experiences"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/sterling-xperiences/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.facebook.com/sterlingxperiences"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a href="tel:+2347089300072">
              <TelephoneIcon />
            </a>
            <a href="mailto:joy@sterlingxperiences.com">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="space-y-[16px] mt-[32px] md:mt-[0px] mb-[16px] md:mb-0">
          <h1 className="font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[48px] text-[#FFD700] leading-[43px] md:leading-[57px] tracking-[-0.04em] text-center md:text-left">
            Sign up for our Newsletter
          </h1>
          <div className="flex flex-col space-y-[8px] py-[20px] md:py-[0px]">
            <label
              className="font-openSans font-[400] text-[16px] leading-[22px] tracking-[-0.02em] text-[#F6F1E5]"
              htmlFor="email"
            >
              Email Address
            </label>

            <div className="flex relative">
              <input
                className="w-full h-[51px] rounded-[16px] px-[20px]"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                className="absolute right-[11px] top-[7px] h-[38px] flex items-center justify-center bg-[#800080] text-[#F6F1E5] px-[16px] py-[8px] rounded-[16px] hover:bg-[#a22ca2] transition-all duration-300 ease-in-out"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>

          <p className="font-openSans font-[400] text-[16px] leading-[25px] tracking-[-0.02em] text-[#F6F1E5]">
            Copyright &copy; {new Date().getFullYear()} Sterling Experiences
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Footer;
