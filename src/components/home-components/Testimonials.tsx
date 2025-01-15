import { StarIcon } from "../../assets/icons";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto md:border-y border-[#0000004D]">
      <div className="hidden md:flex gap-[120px] justify-between items-center pt-[56px] pb-[90px] max-w-[1300px] px-[50px]">
        <div className="flex gap-[200px] items-center justify-between">
          <h1 className="font-ebGaramond text-[36px] font-[500] leading-[43px] tracking-[-0.04em] whitespace-nowrap">
            What our clients says
          </h1>
          <StarIcon />
        </div>

        <div className="font-openSans">
          <p className="font-[400] text-[18px] leading-[25px] tracking-[-0.02em]">
            Joy is quite innovative in the execution of the project, and she
            does it effortlessly. If you desire that exceptional and excellent
            delivery on your events, I recommend Joy and her team of
            professionals at Sterling Experiences. With Sterling Experiences,
            experience peace!!
          </p>
          <h2 className="font-[600] text-[18px] leading-[25px] tracking-[-0.02em] mt-[15px]">
            Timothy Olalekan, 3IR Prints
          </h2>
        </div>
      </div>

      <div className="md:hidden mx-[16px] rounded-[16px] shadow-[0_0_4px_0_#0000004D] px-[45px] pt-[18px] pb-[40px]">
        <h1 className="text-[#0E0E12] text-[20px] font-[600] leading-[28px] tracking-[-0.02em]">
          What our clients says
        </h1>
        <div className="font-openSans mt-[18px]">
          <p className="font-[400] text-[12px] leading-[16px] tracking-[-0.02em]">
            Joy is quite innovative in the execution of the project, and she
            does it effortlessly. If you desire that exceptional and excellent
            delivery on your events, I recommend Joy and her team of
            professionals at Sterling Experiences. With Sterling Experiences,
            experience peace!!
          </p>
          <h2 className="font-[600] text-[12px] leading-[16px] tracking-[-0.02em] mt-[15px]">
            Timothy Olalekan, 3IR Prints
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
