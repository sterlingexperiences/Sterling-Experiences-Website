const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-end gap-[32px] bg-[#FFD700] rounded-[16px] h-[411px] pb-[18px] about_bg">
        <h1 className="rounded-r-[16px] rounded-b-[16px] bg-[#800080] px-[24px] font-ebGaramond font-[600] text-[56px] text-[#FFD700] leading-[78px] tracking-[-0.04em] hover:bg-[#FFD700] hover:text-[#800080] transition-all duration-300">
          We Create
        </h1>
        <h1 className="font-ebGaramond rounded-l-[16px] rounded-b-[16px] px-[24px] font-[600] text-[56px] text-white bg-[#800080] leading-[78px] tracking-[-0.04em] hover:bg-white hover:text-[#800080] transition-all duration-300">
          Sterling Experiences
        </h1>
      </div>

      <div className="space-y-[16px] px-[100px] my-[60px]">
        <p className="font-openSans font-[400] text-[18px] leading-[28px] tracking-[-0.02em] text-[#0E0E12]">
          Sterling Experiences is an event management company based in Nigeria,
          that specializes in creating exceptional and memorable experiences for
          businesses. A company founded out of the captivation of the magic of
          events. From school funfairs to university activities, the profound
          joy in bringing people together. This passion led to volunteering with
          non-profits and experience firsthand the transformative power of
          well-planned events.
        </p>
        <p className="font-openSans font-[400] text-[18px] leading-[28px] tracking-[-0.02em] text-[#0E0E12]">
          Today, this passion has turned into a reality with Sterling
          Experiences. We specialize in crafting memorable corporate events that
          not only entertain but also achieve your business objectives. With
          years of experience in project management, we meticulously plan and
          execute every detail, ensuring a seamless and impactful experience.
        </p>
      </div>
    </div>
  );
};

export default Header;
