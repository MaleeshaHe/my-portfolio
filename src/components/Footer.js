export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/MaleeshaHe" },
    { name: "LinkedIn", href: "https://linkedin.com/in/MaleeshaHe" },
    { name: "Portfolio", href: "https://maleeshaherath.me" },
  ];

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
              Maleesha Herath
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Fullstack Software Engineer Intern passionate about building
              scalable web and mobile applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">
              Connect
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#1a1a1a] mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm order-2 sm:order-1">
            © {currentYear} Maleesha Herath. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
            <a
              href="#"
              className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-6 sm:mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
