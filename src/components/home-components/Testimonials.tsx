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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Trigger slide-out transition
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Update index
        setIsTransitioning(false); // Trigger slide-in transition
      }, 500); // Match this to the transition duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mx-auto md:border-y border-[#0000004D]">
      {/* Desktop View */}
      <div className="hidden md:flex gap-[120px] justify-between items-center pt-[56px] pb-[90px] max-w-[1300px] px-[50px]">
        <div className="flex gap-[200px] items-center justify-between">
          <h1 className="font-ebGaramond text-[36px] font-medium leading-[43px] tracking-[-0.04em] whitespace-nowrap">
            What our clients say
          </h1>
          <StarIcon />
        </div>
        <div
          className={`font-openSans transition-transform duration-500 ease-in-out ${
            isTransitioning
              ? "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <p className="font-normal text-[18px] leading-[25px] tracking-[-0.02em]">
            {testimonials[currentIndex].message}
          </p>
          <h2 className="font-semibold text-[18px] leading-[25px] tracking-[-0.02em] mt-[15px]">
            {testimonials[currentIndex].author}
          </h2>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mx-[16px] rounded-[16px] shadow-[0_0_4px_0_#0000004D] px-[45px] pt-[18px] pb-[40px]">
        <h1 className="text-[#0E0E12] text-[20px] font-semibold leading-[28px] tracking-[-0.02em]">
          What our clients say
        </h1>
        <div
          className={`font-openSans mt-[18px] transition-transform duration-500 ease-in-out ${
            isTransitioning
              ? "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <p className="font-normal text-[12px] leading-[16px] tracking-[-0.02em]">
            {testimonials[currentIndex].message}
          </p>
          <h2 className="font-semibold text-[12px] leading-[16px] tracking-[-0.02em] mt-[15px]">
            {testimonials[currentIndex].author}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
