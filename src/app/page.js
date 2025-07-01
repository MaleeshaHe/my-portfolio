import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import WorkExperience from "@/components/WorkExperience";
import EducationSection from "@/components/EducationSection";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <SkillsSection />
      <WorkExperience />
      <EducationSection />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
