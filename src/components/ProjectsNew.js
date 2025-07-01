import { ExternalLink, Github, Sparkles, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Investment Portfolio Generator",
    description:
      "An intelligent portfolio generator using machine learning algorithms to optimize investment strategies based on risk tolerance and market analysis.",
    tech: ["Python", "Machine Learning", "Next.js", "Chart.js"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Hotel Booking Management System",
    description:
      "A comprehensive hotel management system with booking functionality, room management, and customer service features.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Sabaragamuwa Athsalu Inventory System",
    description:
      "A modern inventory management system designed for efficient stock tracking and business operations.",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "University Past Papers App",
    description:
      "A Flutter mobile application providing students easy access to past examination papers and study materials.",
    tech: ["Flutter", "Firebase", "Dart"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Beans Café MIS",
    description:
      "A comprehensive management information system for café operations including inventory, sales, and customer management.",
    tech: ["Java", "MySQL", "Swing", "JDBC"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "KwikMart E-commerce",
    description:
      "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

function ProjectCard({ project }) {
  return (
    <div className={`group ${project.featured ? "lg:col-span-2" : ""}`}>
      <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#2a2a2a] transition-all duration-500 hover:transform hover:scale-[1.02]">
        {/* Project Image */}
        <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-gray-500 mx-auto mb-2 opacity-50" />
              <span className="text-gray-500 text-sm font-medium">
                Project Preview
              </span>
            </div>
          </div>

          {/* Hover overlay with actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
              aria-label="View live project"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
              aria-label="View source code"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs text-gray-300 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full hover:border-[#3a3a3a] hover:bg-[#2a2a2a] transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
            A showcase of my technical projects spanning web development, mobile
            applications, and machine learning implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center">
          <a
            href="https://github.com/MaleeshaHe"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-gray-700 text-white text-sm font-medium rounded-full hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-300"
          >
            View all projects on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
