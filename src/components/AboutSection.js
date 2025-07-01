"use client";

import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-gray-400 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
            <User className="w-4 h-4" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Know More About Me
          </h2>
        </div>

        {/* About Content */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Self-introduction headline */}
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
              Hi, I'm{" "}
              <span className="font-semibold text-[#FF4533]">
                Maleesha Herath
              </span>{" "}
              — a fullstack software engineer intern passionate about building{" "}
              <span className="text-gray-300">
                responsive, scalable, and user-centric
              </span>{" "}
              digital experiences.
            </h3>
          </div>

          {/* About paragraphs */}
          <div className="space-y-6 animate-fade-in-delay">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm currently an undergraduate at the{" "}
              <span className="text-white font-medium">
                University of Ruhuna
              </span>
              , pursuing a degree in ICT. With hands-on experience in
              JavaScript, Java, Python, C#, Dart, and frameworks like React,
              Next.js, Node.js, Spring Boot, Flutter, and .NET, I build software
              that bridges logic and usability.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              From academic projects to freelance work, I've delivered{" "}
              <span className="text-white font-medium">
                fullstack solutions
              </span>{" "}
              across mobile apps, e-commerce systems, inventory management
              tools, and investment analysis platforms. I'm also comfortable
              with databases (MySQL, PostgreSQL, MongoDB) and cloud platforms
              (GCP, AWS, Azure).
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I take pride in{" "}
              <span className="text-[#FF4533] font-medium">
                solving problems, learning continuously, and building meaningful
                software
              </span>
              . Whether it's through elegant UI design or robust backend logic,
              I strive to deliver work that makes a difference.
            </p>
          </div>

          {/* Additional highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-delay-2">
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#333] transition-colors">
              <div className="text-[#FF4533] text-2xl font-bold mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#333] transition-colors">
              <div className="text-[#FF4533] text-2xl font-bold mb-2">15+</div>
              <div className="text-gray-400 text-sm">Technologies Mastered</div>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#333] transition-colors">
              <div className="text-[#FF4533] text-2xl font-bold mb-2">2+</div>
              <div className="text-gray-400 text-sm">Years of Experience</div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 animate-fade-in-delay-3">
            <p className="text-gray-400 mb-6">
              Ready to collaborate on your next project?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FF4533] hover:bg-[#E63E2E] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#FF4533]/25"
            >
              Let's Work Together
            </a>
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
