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
    <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#333] transition-all duration-300 group hover:bg-[#111]">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-lg bg-[#1a1a1a] text-gray-400 group-hover:bg-[#2a2a2a] group-hover:text-white transition-all">
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors">
          {category.title}
        </h3>
      </div>

      {/* Skills List */}
      <div className="space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            className="flex items-center gap-3 py-1.5 px-3 rounded-lg hover:bg-[#1a1a1a] transition-colors"
          >
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0"></div>
            <span className="text-gray-300 font-medium text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CertificationsCard() {
  return (
    <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#333] transition-all duration-300 group hover:bg-[#111]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-lg bg-[#1a1a1a] text-gray-400 group-hover:bg-[#2a2a2a] group-hover:text-white transition-all">
          <Award className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors">
          Certifications
        </h3>
      </div>

      {/* Certifications List */}
      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex items-start gap-3 py-1.5 px-3 rounded-lg hover:bg-[#1a1a1a] transition-colors"
          >
            <Award className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300 font-medium text-sm leading-relaxed">
              {cert}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-gray-400 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
            <Code className="w-4 h-4" />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
            A comprehensive overview of my technical competencies across various
            programming languages, frameworks, and development tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-2xl mx-auto">
          <CertificationsCard />
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f0f0f] border border-[#1a1a1a] rounded-full">
            <Zap className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 text-sm">
              Always learning and expanding my technical knowledge
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
