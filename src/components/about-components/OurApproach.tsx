import { StarIcon } from "../../assets/icons";

const OurApproach = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[60%] flex items-center justify-between mr-[100px]">
        <div className="space-y-[24px]">
          <h1 className="font-ebGaramond text-[56px] text-[#800080] font-[600] leading-[78px] tracking-[-0.04em]">
            Our Approach
          </h1>
          <p className="font-openSans text-[18px] text-[#0E0E12] leading-[25px] tracking-[-0.02em]">
            We believe in a collaborative approach, working closely with our
            clients to understand their specific needs and preferences. We are
            committed to delivering personalized and memorable experiences that
            exceed expectations.
          </p>
          <p className="font-openSans text-[18px] text-[#0E0E12] leading-[25px] tracking-[-0.02em]">
            We are committed to delivering exceptional service and creating
            unforgettable events. Our team of experienced professionals will
            work tirelessly to ensure that your event is a resounding success.
          </p>
        </div>
        <div className="shrink-0">
          <StarIcon />
        </div>
      </div>

      <div className="w-[40%] font-openSans">
        <img src="" className="w-full h-[370px] bg-red-500" alt="" />
      </div>
    </div>
  );
};

export default OurApproach;
