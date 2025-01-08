import { StarIcon } from "../../assets/icons";

const Testimonials = () => {
  return (
    <div className="flex justify-between items-center pt-[56px] pb-[90px] bg-red-300">
      <div className="w-[50%] flex items-center justify-between mr-[100px]">
        <h1 className="font-ebGaramond text-[36px] font-[500] leading-[43px] tracking-[-0.04em]">
          What our clients says
        </h1>
        <StarIcon />
      </div>

      <div className="w-[50%] font-openSans">
        <p className="font-[400] text-[18px] text-balance leading-[25px] tracking-[-0.02em]">
          Joy is quite innovative in the execution of the project, and she does
          it effortlessly. If you desire that exceptional and excellent delivery
          on your events, I recommend Joy and her team of professionals at
          Sterling Experiences. With Sterling Experiences, experience peace!!
        </p>
        <h2 className="font-[600] text-[18px] leading-[25px] tracking-[-0.02em] mt-[15px]">
          Timothy Olalekan, 3IR Prints
        </h2>
      </div>
    </div>
  );
};

export default Testimonials;
