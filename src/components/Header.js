"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4">
      <nav className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-white font-bold text-xl tracking-tight hover:text-gray-200 transition-colors"
            >
              Maleesha
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-all duration-200 hover:scale-105 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF4533] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side - Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Online Status Badge */}
            <div className="flex items-center gap-2 bg-[#FF4533]/10 border border-[#FF4533]/20 rounded-full px-3 py-1.5">
              <div className="w-2 h-2 bg-[#FF4533] rounded-full animate-pulse"></div>
              <Phone className="w-3 h-3 text-[#FF4533]" />
              <span className="text-[#FF4533] text-xs font-medium">Online</span>
            </div>

            {/* Phone Number */}
            <a
              href="tel:+94778236207"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              +94 77 823 6207
            </a>

            {/* Book a Call Button */}
            <button className="bg-[#FF4533] hover:bg-[#E63E2E] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#FF4533]/25 active:scale-95">
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white/80 hover:text-white transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3 bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/10">
              {/* Mobile Nav Links */}
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors py-2 px-2 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Contact Section */}
              <div className="pt-3 border-t border-white/10 space-y-3">
                {/* Online Status */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF4533] rounded-full animate-pulse"></div>
                  <Phone className="w-4 h-4 text-[#FF4533]" />
                  <span className="text-[#FF4533] text-sm font-medium">
                    Online
                  </span>
                </div>

                {/* Phone Number */}
                <a
                  href="tel:+94778236207"
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors block"
                >
                  +94 77 823 6207
                </a>

                {/* Mobile CTA Button */}
                <button className="w-full bg-[#FF4533] hover:bg-[#E63E2E] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95">
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
