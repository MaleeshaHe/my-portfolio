import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a]"></div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          Open to Opportunities
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 leading-[0.9] tracking-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
            Maleesha Herath
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 font-light">
          Fullstack Software Engineer Intern
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          A passionate fullstack software engineer intern skilled in building
          scalable web and mobile applications. I blend design, logic, and code
          to deliver user-focused solutions using Next.js, Node.js, Flutter, and
          more.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View My Projects
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-gray-700 text-white text-sm font-medium rounded-full hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Fiverr CTA */}
        <div className="mb-16">
          <a
            href="https://www.fiverr.com/maleeshahe?public_mode=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FF4533] hover:bg-[#E63E2E] text-white text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF4533]/25"
          >
            Hire Me on Fiverr
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent"></div>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
