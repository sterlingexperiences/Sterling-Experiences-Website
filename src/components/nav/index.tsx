import React, { useState } from "react";
import Logo from "../../assets/sterling-experiences-logo.png";
import { NavLink } from "react-router"; // Correct import for NavLink
import { CloseIcon, HamburgerIcon } from "../../assets/icons";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about-us" },
  { name: "SERVICES", path: "/services" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "CONTACT", path: "/contact-us" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#F6F1E5] mt-[50px]">
      {/* Desktop Navigation */}
      <nav className="fixed top-0 w-full flex justify-between items-center py-[8px] px-[48px] rounded-[16px] border border-[#800080] bg-[#F6F1E5]">
        {/* Logo */}
        <a href="/">
          <img src={Logo} alt="Logo" className="w-[150px]" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-[40px] text-[#0E0E12] font-[400] text-[16px] leading-[24px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-[#800080]" : "hover:text-[#800080]"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Start Planning Button */}
        <div className="hidden md:flex">
          <a
            href="#"
            className="font-[500] text-[16px] rounded-[10px] px-[20px] py-[12px] border border-[#800080] text-[#800080] hover:bg-[#800080] hover:text-white transition"
          >
            Start Planning
          </a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={toggleMobileMenu}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggleMobileMenu()}
          aria-label="Toggle Mobile Menu"
        >
          <HamburgerIcon />
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed top-0 left-0 w-[75%] max-w-[300px] h-full bg-[#F6F1E5] shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-6">
              <img src={Logo} alt="Logo" className="w-[120px]" />
              <div
                onClick={toggleMobileMenu}
                className="cursor-pointer"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleMobileMenu()}
                aria-label="Close Mobile Menu"
              >
                <CloseIcon />
              </div>
            </div>

            {/* Mobile Links */}
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center text-[#800080]"
                        : "flex items-center text-[#0E0E12] hover:text-[#800080]"
                    }
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Start Planning Button */}
            <a
              href="#"
              className="block text-center mt-auto font-[500] text-[16px] rounded-[10px] px-[20px] py-[12px] border border-[#800080] text-[#800080] hover:bg-[#800080] hover:text-white transition"
            >
              Start Planning
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
