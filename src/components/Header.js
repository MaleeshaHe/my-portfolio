"use client";

import { useState } from "react";
import { Phone, Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full px-3 sm:px-4 py-3 sm:py-4">
      <nav className="bg-black/20 backdrop-blur-sm border border-neutral-700/30 rounded-xl px-4 sm:px-6 py-3 sm:py-4 mx-auto max-w-7xl shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-white font-bold text-lg sm:text-xl tracking-tight hover:text-[#FF4533] transition-colors duration-300"
            >
              Maleesha
              <span className="text-[#FF4533]">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105 relative group px-2 py-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FF4533] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side - Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {/* Online Status Badge */}
            <div className="flex items-center gap-2 bg-[#FF4533]/5 border border-[#FF4533]/20 rounded-full px-3 py-1.5 hover:bg-[#FF4533]/10 transition-all duration-300">
              <div className="w-2 h-2 bg-[#FF4533] rounded-full animate-pulse"></div>
              <Phone className="w-3 h-3 text-[#FF4533]" />
              <span className="text-[#FF4533] text-xs font-medium">
                Available
              </span>
            </div>

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download="Maleesha_Herath_CV.pdf"
              className="inline-flex items-center gap-2 bg-[#FF4533] hover:bg-[#E63E2E] text-white font-semibold px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF4533]/25 active:scale-95 text-sm"
            >
              <Download className="w-4 h-4" />
              <span className="hidden xl:inline">Download CV</span>
              <span className="xl:hidden">CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/3"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-neutral-700/30">
            <div className="flex flex-col space-y-2 sm:space-y-3 bg-black/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-neutral-700/20">
              {/* Mobile Nav Links */}
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/3 hover:translate-x-1 group flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <span className="text-[#FF4533] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </a>
              ))}

              {/* Mobile Contact Section */}
              <div className="pt-3 border-t border-neutral-700/20 space-y-3">
                {/* Online Status */}
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-[#FF4533] rounded-full animate-pulse"></div>
                  <Phone className="w-4 h-4 text-[#FF4533]" />
                  <span className="text-[#FF4533] text-sm font-medium">
                    Available for Work
                  </span>
                </div>

                {/* Mobile Download CV Button */}
                <a
                  href="/cv.pdf"
                  download="Maleesha_Herath_CV.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF4533] hover:bg-[#E63E2E] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
