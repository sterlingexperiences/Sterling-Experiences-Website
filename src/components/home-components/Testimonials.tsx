import { useState, useEffect } from "react";
import { StarIcon } from "../../assets/icons";

const testimonials = [
  {
    message:
      "Joy is quite innovative in the execution of the project, and she does it effortlessly. If you desire that exceptional and excellent delivery on your events, I recommend Joy and her team of professionals at Sterling Experiences. With Sterling Experiences, experience peace!!",
    author: "Timothy Olalekan, 3IR Prints",
  },
  {
    message:
      "Working with Sterling Experiences has been phenomenal. Their attention to detail and creativity brought our vision to life in ways we never imagined.",
    author: "Sophia Johnson, Creative Director",
  },
  {
    message:
      "Sterling Experiences delivered beyond our expectations. They truly understand how to create memorable events.",
    author: "Michael Adeyemi, CEO at Eventify",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mx-auto md:border-y border-[#0000004D]">
      <div className="hidden md:flex gap-[120px] items-center justify-center overflow-hidden w-full max-w-[1300px] px-4 md:px-8 py-12">
        <div className="flex items-center gap-[200px]">
          <h1 className="font-ebGaramond text-[24px] md:text-[36px] font-medium leading-tight tracking-[-0.04em] whitespace-nowrap">
            What our clients say
          </h1>
          <StarIcon />
        </div>
        <div className="relative w-[100%] h-[150px] md:h-[200px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <p className="font-openSans text-[14px] md:text-[18px] leading-[24px] tracking-[-0.02em]">
                {testimonial.message}
              </p>
              <h2 className="mt-4 font-semibold text-[14px] md:text-[18px] leading-tight">
                {testimonial.author}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mx-[16px] w-[90%] rounded-[16px] shadow-[0_0_4px_0_#0000004D] px-[45px] pt-[18px] pb-[40px]">
        <h1 className="text-[#0E0E12] text-[20px] font-[600] leading-[28px] tracking-[-0.02em]">
          What our clients say
        </h1>
        <div className="relative mt-[18px] h-[120px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <p className="font-openSans font-[400] text-[12px] leading-[16px] tracking-[-0.02em]">
                {testimonial.message}
              </p>
              <h2 className="font-openSans font-[600] text-[12px] leading-[16px] tracking-[-0.02em] mt-[15px]">
                {testimonial.author}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
