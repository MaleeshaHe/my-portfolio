"use client";

import { User, Code, Heart, Zap, Award, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#0f0f0f] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:50px_50px] opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 text-sm text-gray-400 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-full hover:border-blue-500/30 transition-colors duration-300">
            <User className="w-4 h-4 text-blue-400" />
            About Me
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Know More About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate fullstack developer crafting digital experiences that
            matter
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Main About Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Self-introduction headline */}
            <div className="animate-fade-in">
              <div className="bg-gradient-to-r from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6">
                  Hi, I'm{" "}
                  <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Maleesha Herath
                  </span>{" "}
                  — a fullstack software engineer intern passionate about
                  building{" "}
                  <span className="text-blue-300">
                    responsive, scalable, and user-centric
                  </span>{" "}
                  digital experiences.
                </h3>

                {/* Feature highlights */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    <Code className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-300 text-sm font-medium">
                      Full Stack
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300 text-sm font-medium">
                      Problem Solver
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                    <Heart className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 text-sm font-medium">
                      Passionate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* About paragraphs */}
            <div className="space-y-6 animate-fade-in-delay">
              <div className="bg-gradient-to-r from-neutral-900/60 to-neutral-800/40 backdrop-blur-sm border border-neutral-700/30 rounded-xl p-6 hover:border-neutral-600/40 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm currently an undergraduate at the{" "}
                  <span className="font-medium bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                    University of Ruhuna
                  </span>
                  , pursuing a degree in ICT. With hands-on experience in
                  JavaScript, Java, Python, C#, Dart, and frameworks like React,
                  Next.js, Node.js, Spring Boot, Flutter, and .NET, I build
                  software that bridges logic and usability.
                </p>
              </div>

              <div className="bg-gradient-to-r from-neutral-900/60 to-neutral-800/40 backdrop-blur-sm border border-neutral-700/30 rounded-xl p-6 hover:border-neutral-600/40 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed">
                  From academic projects to freelance work, I've delivered{" "}
                  <span className="font-medium bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                    fullstack solutions
                  </span>{" "}
                  across mobile apps, e-commerce systems, inventory management
                  tools, and investment analysis platforms. I'm also comfortable
                  with databases (MySQL, PostgreSQL, MongoDB) and cloud
                  platforms (GCP, AWS, Azure).
                </p>
              </div>

              <div className="bg-gradient-to-r from-neutral-900/60 to-neutral-800/40 backdrop-blur-sm border border-neutral-700/30 rounded-xl p-6 hover:border-neutral-600/40 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I take pride in{" "}
                  <span className="text-blue-400 font-medium">
                    solving problems, learning continuously, and building
                    meaningful software
                  </span>
                  . Whether it's through elegant UI design or robust backend
                  logic, I strive to deliver work that makes a difference.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div className="lg:col-span-4 space-y-6">
            {/* Stats Cards */}
            <div className="space-y-4 animate-fade-in-delay-2">
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-xl">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-1">
                      50+
                    </div>
                    <div className="text-gray-400 text-sm">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/20 border border-purple-500/30 rounded-xl">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-1">
                      15+
                    </div>
                    <div className="text-gray-400 text-sm">
                      Technologies Mastered
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-500 hover:transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-xl">
                    <Award className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      2+
                    </div>
                    <div className="text-gray-400 text-sm">
                      Years of Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 animate-fade-in-delay-3">
              <p className="text-gray-400 mb-4 text-center">
                Ready to collaborate on your next project?
              </p>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
              >
                Let's Work Together
                <Zap className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
