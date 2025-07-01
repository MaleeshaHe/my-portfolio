"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

const workExperience = [
  {
    role: "Freelance Programmer",
    company: "Fiverr",
    period: "Jan 2024 – Present",
    type: "Freelance",
    achievements: [
      "Delivered fullstack applications using Java, Python, React.js, Node.js, .NET C#, and MySQL",
      "Built scalable client projects and improved real-world problem-solving and communication skills",
    ],
  },
  {
    role: "WordPress Web Developer",
    company: "Enliven Designers",
    period: "Apr 2023 – Present",
    type: "Contract",
    achievements: [
      "Designed and developed responsive WordPress websites with performance in mind",
      "Created Figma UI/UX designs to boost engagement and accessibility",
      "Collaborated with clients to deliver high-quality results on deadline",
    ],
  },
];

function ExperienceCard({ experience, index }) {
  return (
    <div className="relative group">
      {/* Timeline Line */}
      <div className="absolute left-4 sm:left-6 top-12 bottom-0 w-px bg-[#1a1a1a] group-last:hidden"></div>

      {/* Timeline Dot */}
      <div className="absolute left-2.5 sm:left-4 top-8 w-3 h-3 sm:w-4 sm:h-4 bg-[#0a0a0a] border-2 border-[#333] rounded-full group-hover:border-white transition-colors duration-300"></div>

      {/* Content Card */}
      <div className="ml-10 sm:ml-16 mb-8 sm:mb-12">
        <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-4 sm:p-6 hover:border-[#333] transition-all duration-300 group-hover:bg-[#111] relative overflow-hidden">
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-gray-100 transition-colors break-words">
                  {experience.role}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base truncate">
                      {experience.company}
                    </span>
                  </div>
                  <span className="text-[#333] hidden sm:inline">•</span>
                  <span className="text-xs sm:text-sm pl-5 sm:pl-0">
                    {experience.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{experience.period}</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-2 sm:space-y-3">
              {experience.achievements.map((achievement, achievementIndex) => (
                <div
                  key={achievementIndex}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#0a0a0a]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Professional Journey</span>
            <span className="sm:hidden">Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 px-4">
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg px-4">
            A timeline of my professional experience, showcasing the roles where
            I've contributed to impactful projects and grown as a developer.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative px-2 sm:px-0">
          {workExperience.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>

        {/* Current Status */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-[#0f0f0f] border border-[#1a1a1a] rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
            <span className="text-gray-300 text-xs sm:text-sm">
              <span className="hidden sm:inline">
                Open to new opportunities and exciting challenges
              </span>
              <span className="sm:hidden">Open to new opportunities</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
