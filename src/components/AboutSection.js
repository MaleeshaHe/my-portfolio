"use client";

import { User, Code, Award, Target, BookOpen, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-[#050505] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-400 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4 px-4">
            Know More About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4">
            Passionate fullstack developer crafting digital experiences that
            matter
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* About Text Section */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-xl p-6 sm:p-8 shadow-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-light text-white leading-relaxed mb-4 sm:mb-6">
                Hi, I&apos;m{" "}
                <span className="font-semibold text-[#FF4533]">
                  Maleesha Herath
                </span>{" "}
                — a fullstack software engineer intern passionate about building
                responsive, scalable, and user-centric digital experiences.
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
                  <Code className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                  <span className="text-gray-300 text-xs sm:text-sm font-medium">
                    Full Stack
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                  <span className="text-gray-300 text-xs sm:text-sm font-medium">
                    Problem Solver
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                  <span className="text-gray-300 text-xs sm:text-sm font-medium">
                    Continuous Learner
                  </span>
                </div>
              </div>
            </div>

            {/* About Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-xl p-6 sm:p-8 shadow-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  I&apos;m currently an undergraduate at the{" "}
                  <span className="font-medium text-white">
                    University of Ruhuna
                  </span>
                  , pursuing a degree in ICT. With hands-on experience in
                  JavaScript, Java, Python, C#, Dart, and frameworks like React,
                  Next.js, Node.js, Spring Boot, Flutter, and .NET, I build
                  software that bridges logic and usability.
                </p>
              </div>

              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-xl p-6 sm:p-8 shadow-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  From academic projects to freelance work, I&apos;ve delivered{" "}
                  <span className="font-medium text-white">
                    fullstack solutions
                  </span>{" "}
                  across mobile apps, e-commerce systems, inventory management
                  tools, and investment analysis platforms. I&apos;m also
                  comfortable with databases (MySQL, PostgreSQL, MongoDB) and
                  cloud platforms (GCP, AWS, Azure).
                </p>
              </div>

              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-xl p-6 sm:p-8 shadow-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  I take pride in{" "}
                  <span className="text-white font-medium">
                    solving problems, learning continuously, and building
                    meaningful software
                  </span>
                  . Whether it&apos;s through elegant UI design or robust
                  backend logic, I strive to deliver work that makes a
                  difference.
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {/* Stats Cards */}
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-xl p-4 sm:p-6 shadow-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl">
                    <Target className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF4533]" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FF4533] mb-1">
                      50+
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-xl p-4 sm:p-6 shadow-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl">
                    <Code className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF4533]" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FF4533] mb-1">
                      15+
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Technologies Mastered
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-xl p-4 sm:p-6 shadow-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl">
                    <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF4533]" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FF4533] mb-1">
                      2+
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-xl p-4 sm:p-6 shadow-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
              <p className="text-gray-400 mb-3 sm:mb-4 text-center text-sm sm:text-base">
                Ready to collaborate on your next project?
              </p>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF4533] hover:bg-[#E63E2E] text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF4533]/25 text-sm sm:text-base"
              >
                Let&apos;s Work Together
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
