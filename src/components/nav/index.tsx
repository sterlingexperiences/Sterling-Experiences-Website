import NavLayout from "../../layout/NavLayout";
import Logo from "../../assets/sterling-experiences-logo.png";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="top-[50px] right-0 left-0 w-full mx-auto items-center hidden lg:flex fixed">
      <NavLayout bg="#F6F1E5">
        <nav className="w-full flex justify-between items-center py-[8px] px-[48px] rounded-[16px] border border-[#800080]">
          <div className="w-fit flex justify-center space-x-6 items-center text-xl font-semibold leading-6 tracking-wider cursor-pointer">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>

          <div className="w-fit space-x-[40px] text-[#0E0E12] flex font-[400] text-[16px] leading-[24px]">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-[#800080]" : "")}
            >
              <li className={`list-none hover:cursor-pointer`}>HOME</li>
            </NavLink>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) => (isActive ? "text-[#800080]" : "")}
            >
              <li className={`list-none hover:cursor-pointer`}>ABOUT US </li>
            </NavLink>
            <NavLink
              to={"/services"}
              className={({ isActive }) => (isActive ? "text-[#800080]" : "")}
            >
              <li className={`list-none hover:cursor-pointer`}>SERVICES </li>
            </NavLink>
            <NavLink
              to={"/portfolio"}
              className={({ isActive }) => (isActive ? "text-[#800080]" : "")}
            >
              <li className={`list-none hover:cursor-pointer`}>PORTFOLIO</li>
            </NavLink>
            <NavLink
              to={"/contact-us"}
              className={({ isActive }) => (isActive ? "text-[#800080]" : "")}
            >
              <li className={`list-none hover:cursor-pointer`}>CONTACT</li>
            </NavLink>
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
