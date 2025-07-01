import { Download, Code, Database, Wrench } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code className="w-5 h-5" />,
    items: ["JavaScript", "Java", "Python", "C#", "Dart", "PHP"],
  },
  {
    category: "Frontend & Mobile",
    icon: <Code className="w-5 h-5" />,
    items: ["React", "Next.js", "Flutter", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & Frameworks",
    icon: <Database className="w-5 h-5" />,
    items: ["Node.js", "Spring Boot", ".NET", "REST APIs"],
  },
  {
    category: "Databases & Tools",
    icon: <Wrench className="w-5 h-5" />,
    items: ["MySQL", "MongoDB", "Firebase", "Git", "VS Code"],
  },
];

const education = {
  degree: "ICT Undergraduate",
  institution: "University of Ruhuna",
  period: "Current",
  description:
    "Specializing in software engineering and web development with hands-on experience in modern technologies.",
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I'm an ICT undergraduate from the University of Ruhuna with
                hands-on experience in JavaScript, Java, Python, C#, Dart, and
                frameworks like React, Spring Boot, Flutter, and .NET. I
                specialize in scalable web systems, mobile apps, and database
                architecture.
              </p>

              <p>
                I'm passionate about crafting software that solves real
                problems. My experience spans from building investment portfolio
                generators with machine learning to developing complete hotel
                booking systems and mobile applications for educational
                purposes.
              </p>

              <p>
                Currently seeking opportunities to apply my technical skills in
                a dynamic environment where I can contribute to meaningful
                projects and continue growing as a software engineer.
              </p>
            </div>

            {/* Download Resume */}
            <div className="mt-8">
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Download Resume
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-12">
            {/* Skills */}
            <div>
              <h3 className="text-xl font-medium text-white mb-6">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div
                    key={index}
                    className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#2a2a2a] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-gray-400">{skillGroup.icon}</div>
                      <h4 className="text-sm font-medium text-gray-300">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs text-gray-300 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full hover:border-[#3a3a3a] hover:bg-[#2a2a2a] transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-medium text-white mb-6">Education</h3>
              <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#2a2a2a] transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {education.degree}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm text-gray-400 mb-2">
                      <span>{education.institution}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{education.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {education.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
