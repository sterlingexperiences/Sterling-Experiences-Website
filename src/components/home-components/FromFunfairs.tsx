import FunfairImage from "../../assets/images/funfair-image.png";

const FromFunfairs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[100px] justify-between items-center py-[60px]">
      <img src={FunfairImage} alt="Funfair Image" />

      <div className="font-openSans px-[30px]">
        <h1 className="font-ebGaramond font-[600] text-[48px] text-[#800080] leading-[57px] tracking-[-0.04em] text-center md:text-left">
          From Funfairs to Sterling Experiences
        </h1>
        <p className="mt-[8px] text-balance text-center md:text-left">
          Sterling Experiences is an event management company based in Nigeria,
          that specializes in creating exceptional and memorable experiences for
          businesses. A company founded out of the captivation of the magic of
          events. From school funfairs to university activities, the profound
          joy in bringing people together. This passion led to volunteering with
          non-profits and experience firsthand the transformative power of
          well-planned events.
        </p>
        <div className="mt-[40px] flex justify-center md:justify-start">
          <button className="bg-[#800080] flex items-center px-[16px] justify-center h-[38px] md:w-[408px] font-[600] text-[16px] leading-[22px] tracking-[-0.02em] text-[#F6F1E5] rounded-[16px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FromFunfairs;
