import { ChevronDown, ArrowRight, Sparkles, Code, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#0f0f0f]"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:40px_40px] opacity-30"></div>

      {/* Enhanced animated background elements */}
      <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-[#FF4533]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FF4533]/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-[#FF4533] rounded-full animate-ping"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-1000"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Enhanced Status Badge with animation */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-10 text-sm text-emerald-400 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-full backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300 group">
          <div className="relative">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
          </div>
          <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
          Open to Opportunities
        </div>

        {/* Enhanced Main Heading with better typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 leading-[0.85] tracking-tight">
          <span className="block mb-2">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-white via-[#FF4533] to-gray-300 bg-clip-text text-transparent font-semibold relative">
            Maleesha Herath
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF4533]/20 to-transparent blur-3xl"></div>
          </span>
        </h1>

        {/* Enhanced Subtitle with icon */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Code className="w-6 h-6 text-[#FF4533]" />
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light">
            Fullstack Software Engineer Intern
          </h2>
          <Zap className="w-6 h-6 text-blue-400" />
        </div>

        {/* Enhanced Description with better spacing */}
        <p className="text-lg md:text-xl text-gray-400 mb-14 max-w-4xl mx-auto leading-relaxed font-light">
          A passionate fullstack software engineer intern skilled in building
          <span className="text-white font-medium">
            {" "}
            scalable web and mobile applications
          </span>
          . I blend design, logic, and code to deliver user-focused solutions
          using
          <span className="text-[#FF4533] font-medium">
            {" "}
            Next.js, Node.js, Flutter
          </span>
          , and more.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-black text-sm font-semibold rounded-full hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            <span className="relative z-10">View My Projects</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform relative z-10" />
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-10 py-5 border border-gray-600 text-white text-sm font-semibold rounded-full hover:border-[#FF4533] hover:bg-[#FF4533]/10 transition-all duration-300 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF4533]/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            <span className="relative z-10">Get In Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform relative z-10" />
          </a>
        </div>

        {/* Enhanced Fiverr CTA */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs text-[#FF4533] bg-[#FF4533]/10 border border-[#FF4533]/20 rounded-full">
          <Sparkles className="w-3 h-3" />
          Available for Freelance Work
        </div>
        <div className="mb-20">
          <a
            href="https://www.fiverr.com/maleeshahe?public_mode=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#FF4533] to-[#E63E2E] text-white text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FF4533]/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            <span className="relative z-10">Hire Me on Fiverr</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform relative z-10" />
          </a>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-3">
            <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Scroll
            </div>
            <div className="relative">
              <div className="w-px h-16 bg-gradient-to-b from-[#FF4533] via-gray-600 to-transparent"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-[#FF4533] rounded-full animate-pulse"></div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
