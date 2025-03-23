import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Optional, for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["home", "about me", "projects", "contact"];
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0e0e0e] via-[#1c1c1c] to-[#0e0e0e] backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* Left - Name */}
        <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-wide">
          Zawwar Khatri
        </div>

        {/* Center - Nav Links */}
        <ul className="hidden md:flex gap-10 text-[17px] font-medium text-gray-300">
          {navItems.slice(0, 3).map((item) => (
            <li key={item} className="relative group capitalize cursor-pointer">
              <Link
                to={item.replace(" ", "")}
                smooth={true}
                duration={500}
                className="group-hover:text-yellow-400 transition-all"
              >
                {item}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Right - Contact */}
        <div className="hidden md:block text-[17px] font-medium text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#1a1a1a]/90">
          <ul className="flex flex-col gap-5 text-lg font-semibold text-gray-300">
            {navItems.map((item) => (
              <li key={item} className="capitalize hover:text-yellow-400 cursor-pointer">
                <Link
                  to={item.replace(" ", "")}
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
