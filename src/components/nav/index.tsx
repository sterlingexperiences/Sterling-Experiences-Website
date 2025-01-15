import { useEffect, useState } from "react";
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

const StartPlanningButton = () => (
  <a
    href="#"
    className="font-[500] text-[16px] rounded-[10px] px-[20px] py-[12px] border border-[#800080] text-[#800080] hover:bg-[#800080] hover:text-white transition"
  >
    Start Planning
  </a>
);

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow only when the navbar reaches the top
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Escape") {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 mt-[50px] z-50 flex justify-between items-center py-[8px] md:px-[48px] rounded-[16px] md:border border-[#800080] bg-[#F6F1E5] ${
        isSticky ? "shadow-md" : ""
      }`}
    >
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

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onKeyDown={handleKeyDown}
        >
          <div className="fixed top-0 left-0 w-[75%] max-w-[300px] h-full bg-[#F6F1E5] shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <div className="flex justify-between items-center mt-[50px] mb-6">
              <img src={Logo} alt="Logo" className="w-[150px]" />
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
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center text-[#0E0E12] font-[400] text-[16px] leading-[22px] tracking-[0.02em] bg-[#800080B2] rounded-[16px] px-[10px] py-[8px] hover:text-white transition"
                        : "flex items-center text-[#0E0E12] font-[400] text-[16px] leading-[22px] tracking-[0.02em] hover:text-[#800080] px-[10px] py-[8px] transition"
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
              className="block text-center mt-[50px] font-[500] text-[16px] rounded-[10px] px-[20px] py-[12px] border border-[#800080] text-[#800080] hover:bg-[#800080] hover:text-white transition"
            >
              Start Planning
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
