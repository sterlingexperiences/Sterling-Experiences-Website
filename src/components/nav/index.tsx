import React, { useState } from "react";
import Logo from "../../assets/sterling-experiences-logo.png";
import { NavLink } from "react-router";
// import { FaHome, FaInfoCircle, FaServicestack, FaImages, FaEnvelope, FaTimes } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#F6F1E5] mt-[50px]">
      {/* Desktop Navigation */}
      <nav
        style={{ position: "sticky", top: 0 }}
        className="w-full flex justify-between items-center py-[8px] px-[48px] rounded-[16px] border border-[#800080] bg-[#F6F1E5]"
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[150px]" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-[40px] text-[#0E0E12] font-[400] text-[16px] leading-[24px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#800080]" : "hover:text-[#800080]"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "text-[#800080]" : "hover:text-[#800080]"
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-[#800080]" : "hover:text-[#800080]"
            }
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "text-[#800080]" : "hover:text-[#800080]"
            }
          >
            PORTFOLIO
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-[#800080]" : "hover:text-[#800080]"
            }
          >
            CONTACT
          </NavLink>
        </div>

        {/* Start Planning Button */}
        <div className="hidden md:flex">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[500] text-[16px] leading-[20px] rounded-[10px] px-[20px] py-[12px] border border-[#800080] text-[#800080] hover:bg-[#800080] hover:text-white transition ease-in-out"
          >
            Start Planning
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {/* <GiHamburgerMenu className="text-[#800080] text-2xl cursor-pointer" /> */}
          Menu
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed top-0 left-0 w-[75%] max-w-[300px] h-full bg-[#F6F1E5] shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-6">
              <img src={Logo} alt="Logo" className="w-[120px]" />
              {/* <FaTimes
                className="text-[#800080] text-2xl cursor-pointer"
                onClick={toggleMobileMenu}
              /> */}
              X
            </div>

            {/* Mobile Links */}
            <ul className="space-y-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-[#800080]"
                      : "flex items-center text-[#0E0E12] hover:text-[#800080]"
                  }
                  onClick={toggleMobileMenu}
                >
                  {/* <FaHome className="mr-4" />  */}
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-[#800080]"
                      : "flex items-center text-[#0E0E12] hover:text-[#800080]"
                  }
                  onClick={toggleMobileMenu}
                >
                  {/* <FaInfoCircle className="mr-4" />  */}
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-[#800080]"
                      : "flex items-center text-[#0E0E12] hover:text-[#800080]"
                  }
                  onClick={toggleMobileMenu}
                >
                  {/* <FaServicestack className="mr-4" /> */}
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-[#800080]"
                      : "flex items-center text-[#0E0E12] hover:text-[#800080]"
                  }
                  onClick={toggleMobileMenu}
                >
                  {/* <FaImages className="mr-4" />  */}
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-[#800080]"
                      : "flex items-center text-[#0E0E12] hover:text-[#800080]"
                  }
                  onClick={toggleMobileMenu}
                >
                  {/* <FaEnvelope className="mr-4" />  */}
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Start Planning Button */}
            <div className="mt-auto">
              <a
                href="#"
                className="block text-center font-[500] text-[16px] leading-[20px] rounded-[10px] px-[20px] py-[12px] border border-[#800080] text-[#800080] hover:bg-[#800080] hover:text-white transition ease-in-out"
              >
                Start Planning
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
