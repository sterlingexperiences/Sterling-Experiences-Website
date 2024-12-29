import NavLayout from "../../layout/NavLayout";
import Logo from "../../assets/sterling-experiences-logo.png";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div
      className="
      top-0 right-0 left-0 z-50 w-full mx-auto items-center hidden lg:flex sticky"
    >
      <NavLayout bg="#F6F1E5">
        <nav className="w-full flex justify-between items-center py-[8px] px-[48px] rounded-[16px] border border-[#800080]">
          <div className="w-fit flex justify-center space-x-6 items-center text-xl font-semibold leading-6 tracking-wider cursor-pointer">
            <a href="/">
              <img
                src={Logo}
                // className="h-[50px]"
                alt=""
              />
            </a>
          </div>

          <div className="w-fit space-x-[40px] text-[#0E0E12] flex font-[400] text-[16px] leading-[24px]">
            <Link to={"/"}>
              <li className={`list-none hover:cursor-pointer`}>HOME</li>
            </Link>
            <Link to={"/about-us"}>
              <li className={`list-none hover:cursor-pointer`}>ABOUT US </li>
            </Link>
            <Link to={"/services"}>
              <li className={`list-none hover:cursor-pointer`}>SERVICES </li>
            </Link>
            <Link to={"/portfolio"}>
              <li className={`list-none hover:cursor-pointer`}>PORTFOLIO</li>
            </Link>
            <Link to={"/contact-us"}>
              <li className={`list-none hover:cursor-pointer`}>CONTACT</li>
            </Link>
          </div>

          <div className="w-fit flex items-center justify-between space-x-6 rounded-[16px] border border-[#800080]">
            <a
              target="_blank"
              className={`font-[500] text-[16px] leading-[20px] rounded-[10px] p-[20px] h-[48px] flex justify-center items-center hover:text-white hover:bg-opacity-[50%] hover:cursor-pointer duration-300 transition ease-in-out`}
            >
              Start Planning
            </a>
          </div>
        </nav>
      </NavLayout>
    </div>
  );
};

export default NavBar;
