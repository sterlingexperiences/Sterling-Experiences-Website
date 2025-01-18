import { ArrowRight } from "../../assets/icons";
import PortfolioOne from "../../assets/images/portfolio-one.png";
import PortfolioTwo from "../../assets/images/portfolio-two.png";
import PortfolioThree from "../../assets/images/portfolio-three.png";
import { Link } from "react-router";

const Portfolio = () => {
  return (
    <div className="mt-[64px]">
      <h1 className="font-ebGaramond font-[600] text-[36px] md:text-[56px] text-[#800080] leading-[43px] md:leading-[78px] tracking-[-0.04em] mb-[30px] text-center">
        Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] py-[34px] md:py-[89px] px-[14px] md:px-[60px] border border-[#800080] bg-[#FFFFFF] rounded-[16px]">
        <img
          src={PortfolioOne}
          className="hover:scale-105 transition-all duration-500 w-full"
          alt="Portfolio One"
        />
        <img
          src={PortfolioTwo}
          className="hover:scale-105 transition-all duration-500 w-full"
          alt="Portfolio Two"
        />
        <img
          src={PortfolioThree}
          className="hover:scale-105 transition-all duration-500 w-full"
          alt="Portfolio Three"
        />
      </div>

      <div className="flex items-center justify-center mt-[30px]">
        <Link
          to="portfolio"
          className="flex items-center justify-center gap-[8px] border border-[#800080] text-[#800080] rounded-[16px] w-[250px] md:w-[408px] h-[40px] font-openSans font-[600] text-[16px] leading-[22px] tracking-[-0.02em] hover:bg-[#800080] hover:text-[#F6F1E5] transition-all duration-300 ease-in-out"
        >
          See more
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
