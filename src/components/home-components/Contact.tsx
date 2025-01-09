import { BlackStarIcon, YellowStarIcon } from "../../assets/icons";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-[67px]">
      <div className="w-[50%] relative">
        <span className="absolute bottom-[120%] left-[20%] hover:left-[40%] hover:scale-150 transition-all duration-1000 ease-in-out">
          <YellowStarIcon />
        </span>
        <h1 className="font-ebGaramond font-[600] text-[56px] text-[#800080] leading-[78px] tracking-[-0.04em]">
          Send us a message today or book a free consultation
        </h1>
        <button className="flex items-center justify-center gap-[8px] mt-[8px] border border-[#800080] text-[#800080] rounded-[16px] px-[16px] py-[8px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
          Schedule free consultation
        </button>
        <span className="absolute top-[150%] left-[30%] hover:left-[50%] hover:scale-150 transition-all duration-1000 ease-in-out">
          <BlackStarIcon />
        </span>
      </div>

      <div className="w-[50%] bg-[#FFD700] rounded-[16px] px-[28px] py-[37px] space-y-[24px]">
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
            cols={30}
            rows={5}
          ></textarea>
        </div>

        <button className="flex items-center justify-center w-full py-[8px] border border-[#0E0E12] text-[#0E0E12] rounded-[16px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
