"use client";

import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Layout,
  Zap,
  Cloud,
  Wrench,
  Palette,
  Award,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["JavaScript", "Java", "Python", "C", "C#", "Dart", "PHP"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: ["Next.js", "React.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js (Express)", "Spring Boot", ".NET C#", "JavaFX"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["Flutter + Firebase"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Cloud Platforms",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["GCP", "AWS", "Azure", "DigitalOcean"],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Docker", "Git", "GitHub", "Postman"],
  },
  {
    title: "UI/UX & CMS",
    icon: <Palette className="w-6 h-6" />,
    skills: ["Figma", "WordPress"],
  },
];

const certifications = [
  "GitHub Foundations",
  "MongoDB Essentials",
  "Postman API Fundamentals – Student Expert",
];

function SkillCategory({ category, index }) {
  return (
    <div className="group relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-4 sm:p-6 hover:border-[#FF4533]/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FF4533]/10 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF4533]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Category Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative p-2 sm:p-3 rounded-xl bg-gradient-to-br from-[#FF4533]/20 to-[#E63E2E]/10 border border-[#FF4533]/20 group-hover:border-[#FF4533]/40 transition-all duration-300">
            <div className="text-[#FF4533] group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-[#FF4533]/20 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-[#FF4533] transition-colors duration-300 truncate">
              {category.title}
            </h3>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-[#FF4533] to-transparent rounded-full opacity-60 group-hover:opacity-100 group-hover:w-12 sm:group-hover:w-16 transition-all duration-500"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className="relative group/skill py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg bg-neutral-800/40 border border-neutral-700/30 hover:border-[#FF4533]/30 hover:bg-neutral-700/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#FF4533] rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-gray-300 font-medium text-xs sm:text-sm group-hover/skill:text-white transition-colors duration-200 truncate">
                  {skill}
                </span>
              </div>
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-lg bg-[#FF4533]/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-[#FF4533]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

function CertificationsCard() {
  return (
    <div className="group relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 sm:p-8 hover:border-[#FF4533]/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FF4533]/10 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF4533]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="relative p-3 sm:p-4 rounded-xl bg-gradient-to-br from-[#FF4533]/20 to-[#E63E2E]/10 border border-[#FF4533]/20 group-hover:border-[#FF4533]/40 transition-all duration-300">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4533] group-hover:scale-110 transition-transform duration-300" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-[#FF4533]/20 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1 sm:mb-2 group-hover:text-[#FF4533] transition-colors duration-300">
              Certifications
            </h3>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#FF4533] to-transparent rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500"></div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-3 sm:gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group/cert relative py-3 sm:py-4 px-4 sm:px-5 rounded-xl bg-neutral-800/40 border border-neutral-700/30 hover:border-[#FF4533]/30 hover:bg-neutral-700/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-1.5 sm:p-2 rounded-lg bg-[#FF4533]/10 border border-[#FF4533]/20 group-hover/cert:border-[#FF4533]/40 transition-all duration-300 flex-shrink-0">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF4533] group-hover/cert:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-gray-300 font-medium leading-relaxed group-hover/cert:text-white transition-colors duration-200 text-sm sm:text-base block">
                    {cert}
                  </span>
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-[#FF4533]/60 to-transparent rounded-full mt-2 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-[#FF4533]/5 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#FF4533]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#050505] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF4533]/5 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#FF4533]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#E63E2E]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-400 bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-full hover:border-[#FF4533]/30 transition-colors duration-300">
            <Code className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF4533]" />
            <span className="hidden sm:inline">Technical Expertise</span>
            <span className="sm:hidden">Tech Stack</span>
            <div className="w-1 h-1 bg-[#FF4533] rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent px-4">
            Technical Skills
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4">
            A comprehensive overview of my technical competencies across various
            programming languages, frameworks, and development tools.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-[#FF4533] mb-1">
                8+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-[#FF4533] mb-1">
                25+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-[#FF4533] mb-1">
                3
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Certifications
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <CertificationsCard />
        </div>

        {/* Call to Action */}
        <div className="text-center px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-full hover:border-[#FF4533]/30 transition-all duration-300 group">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4533] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
              <span className="hidden sm:inline">
                Always learning and expanding my technical knowledge
              </span>
              <span className="sm:hidden">Always learning new tech</span>
            </span>
            <div className="w-2 h-2 bg-[#FF4533] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
