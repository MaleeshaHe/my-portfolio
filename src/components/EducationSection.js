"use client";

import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const educationData = {
  degree: "Bachelor of Information and Communication Technology (Honours)",
  institution: "University of Ruhuna – Faculty of Technology",
  duration: "2022 – Present",
  gpa: "3.18",
  status: "Currently Pursuing",
  summary:
    "Covers programming, databases, software development, and cloud computing. Involved in hands-on academic projects focused on full-stack web and mobile development.",
};

function EducationCard() {
  return (
    <div className="relative group">
      {/* Main Education Card */}
      <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#333] transition-all duration-300 group-hover:bg-[#111] relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          {/* Header with Institution */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#1a1a1a] text-gray-400 group-hover:bg-[#2a2a2a] group-hover:text-white transition-all">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                    {educationData.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">
                      {educationData.institution}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300">{educationData.status}</span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Duration */}
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Duration
                </p>
                <p className="text-white font-medium">
                  {educationData.duration}
                </p>
              </div>
            </div>

            {/* GPA */}
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  GPA
                </p>
                <p className="text-white font-medium">{educationData.gpa}</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="border-t border-[#1a1a1a] pt-6">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                  Academic Focus
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {educationData.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-gray-400 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
            <GraduationCap className="w-4 h-4" />
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            My academic journey in Information and Communication Technology,
            building a strong foundation in modern software development.
          </p>
        </div>

        {/* Education Card */}
        <EducationCard />

        {/* Additional Academic Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 text-center hover:border-[#333] transition-colors">
            <BookOpen className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Core Subjects</h4>
            <p className="text-gray-400 text-sm">
              Programming, Data Structures, Software Engineering
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 text-center hover:border-[#333] transition-colors">
            <Award className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Specialization</h4>
            <p className="text-gray-400 text-sm">
              Full-stack Web & Mobile Development
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 text-center hover:border-[#333] transition-colors">
            <GraduationCap className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">
              Expected Graduation
            </h4>
            <p className="text-gray-400 text-sm">2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
