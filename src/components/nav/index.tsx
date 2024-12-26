import NavLayout from "../../layout/NavLayout";

const NavBar = () => {
  return (
    <div
      className="
      top-0 right-0 left-0 z-50 w-full mx-auto items-center hidden lg:flex fixed"
    >
      <NavLayout bg="#F6F1E5">
        <nav className="w-full flex justify-between items-center py-[20px] px-[23px]">
          <div className="w-fit flex justify-center space-x-6 items-center text-xl font-semibold leading-6 tracking-wider cursor-pointer">
            <a href="/">
              <img src="/vite.svg" className="h-[50px]" alt="" />
            </a>
          </div>

          <div className="w-fit space-x-[70px] text-white flex font-[400] text-[16px] leading-[24px]">
            <li className={`list-none hover:cursor-pointer`}>HOME</li>
            <li className={`list-none hover:cursor-pointer`}>ABOUT US </li>
            <li className={`list-none hover:cursor-pointer`}>SERVICES </li>
            <li className={`list-none hover:cursor-pointer`}>PORTFOLIO</li>
            <li className={`list-none hover:cursor-pointer`}>CONTACT</li>
          </div>

          <div className="w-fit flex items-center justify-between space-x-6">
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
