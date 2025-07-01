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
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    skills: [
      { name: "React", logo: "/logos/react.png" },
      { name: "Next.js", logo: "/logos/nextjs.png" },
      { name: "JavaScript", logo: "/logos/javascript.png" },
      { name: "TypeScript", logo: "/logos/typescript.png" },
      { name: "HTML/CSS", logo: "/logos/html-css.png" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js", logo: "/logos/nodejs.png" },
      { name: "Java", logo: "/logos/java.png" },
      { name: "Python", logo: "/logos/python.png" },
      { name: "C#", logo: "/logos/csharp.png" },
      { name: "Spring Boot", logo: "/logos/spring.png" },
      { name: ".NET", logo: "/logos/dotnet.png" },
    ],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    skills: [
      { name: "Flutter", logo: "/logos/flutter.png" },
      { name: "Dart", logo: "/logos/dart.png" },
      { name: "React Native", logo: "/logos/react-native.png" },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "MySQL", logo: "/logos/mysql.png" },
      { name: "MongoDB", logo: "/logos/mongodb.png" },
      { name: "Firebase", logo: "/logos/firebase.png" },
      { name: "PostgreSQL", logo: "/logos/postgresql.png" },
    ],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: "REST APIs", logo: "/logos/rest-api.png" },
      { name: "GraphQL", logo: "/logos/graphql.png" },
      { name: "PHP", logo: "/logos/php.png" },
      { name: "Express.js", logo: "/logos/express.png" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      { name: "Git", logo: "/logos/git.png" },
      { name: "VS Code", logo: "/logos/vscode.png" },
      { name: "Docker", logo: "/logos/docker.png" },
      { name: "AWS", logo: "/logos/aws.png" },
      { name: "Vercel", logo: "/logos/vercel.png" },
    ],
  },
];

function SkillCard({ category }) {
  return (
    <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#333] transition-all duration-300 group">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-[#1a1a1a] text-gray-400 group-hover:bg-[#2a2a2a] group-hover:text-white transition-all">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-gray-100 transition-colors">
          {category.title}
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-2 hover:bg-[#1a1a1a] rounded-lg px-3 transition-colors"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg p-1 flex-shrink-0">
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="w-full h-full bg-gray-600 rounded hidden items-center justify-center">
                <span className="text-xs text-white font-bold">
                  {skill.name.charAt(0)}
                </span>
              </div>
            </div>
            <span className="text-gray-300 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechnicalSkills() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
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
