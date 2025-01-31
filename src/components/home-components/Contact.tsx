import { useState } from "react";
import {
  BlackStarIcon,
  BlackStarSmallIcon,
  YellowStarIcon,
} from "../../assets/icons";
import Calender from "../calender/Cal";
import { toast } from "react-toastify";
import { supabase } from "../../Supabase";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setDisabled(!data.name || !data.email || !data.number || !data.message);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Validate phone number (basic format)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(data.number)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // Validate other fields
    if (!data.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!data.message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    if (data.message.trim().length < 10) {
      toast.error("Message should be at least 10 characters long");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("Inquiry").insert(data);

      if (error) {
        toast.error("Failed to submit. Please try again later.");
        setLoading(false);
        return;
      }
      toast.success("Successfully submitted");
      setLoading(false);
      setData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (err) {
      toast.error("An unexpected error occurred");
      setLoading(false);
    }
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-[40px] md:flex-row items-center my-[67px]">
      <div className="md:w-[50%] relative">
        <span className="absolute hidden md:block bottom-[120%] left-[20%] hover:left-[40%] hover:scale-150 transition-all duration-1000 ease-in-out">
          <YellowStarIcon />
        </span>
        <h1 className="font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[56px] text-[#800080] leading-[43px] md:leading-[78px] tracking-[-0.04em] text-center md:text-left">
          Send us a message today or book a free consultation
        </h1>
        <div className="flex items-center justify-center md:justify-start">
          <div className="flex items-center justify-center gap-[8px] mt-[16px] md:mt-[8px] border border-[#800080] text-[#800080] rounded-[16px] px-[16px] py-[8px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em] hover:bg-[#800080] hover:text-white transition">
            <Calender title="Schedule free consultation" />
          </div>
        </div>
        <span className="hidden md:block absolute top-[-40%] md:top-[150%] left-[80%] md:left-[30%] hover:left-[50%] hover:scale-150 transition-all duration-1000 ease-in-out">
          <BlackStarIcon />
        </span>
        <span className="md:hidden absolute top-[-20%] left-[90%] hover:left-[50%] hover:scale-150 transition-all duration-1000 ease-in-out">
          <BlackStarSmallIcon />
        </span>
      </div>

      <div className="w-full md:w-[50%] bg-[#FFD700] rounded-[16px] px-[28px] py-[37px] space-y-[24px]">
        <div className="flex flex-col space-y-[8px]">
          <label
            className="font-openSans font-[400] text-[16px] leading-[22px] tracking-[-0.02em]"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="h-[51px] rounded-[16px] px-[20px]"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
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
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div className="flex flex-col space-y-[8px]">
          <label
            className="font-openSans font-[400] text-[16px] leading-[22px] tracking-[-0.02em]"
            htmlFor="number"
          >
            Phone Number
          </label>
          <input
            className="h-[51px] rounded-[16px] px-[20px]"
            type="tel"
            name="number"
            id="number"
            onChange={handleChange}
            value={data.number}
          />
        </div>
        <div className="flex flex-col space-y-[8px]">
          <label
            className="font-openSans font-[400] text-[16px] leading-[22px] tracking-[-0.02em]"
            htmlFor="message"
          >
            Leave a message
          </label>
          <textarea
            className="rounded-[16px] p-[20px]"
            name="message"
            id="message"
            onChange={handleChange}
            value={data.message}
            cols={30}
            rows={5}
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          disabled={disabled}
          className={`flex items-center justify-center w-full py-[8px] border border-[#800080] text-[#800080] rounded-[16px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em] ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Contact;
