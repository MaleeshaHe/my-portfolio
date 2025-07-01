import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import WorkExperience from "@/components/WorkExperience";
import EducationSection from "@/components/EducationSection";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <SkillsSection />
      <WorkExperience />
      <EducationSection />
      <Projects />
      <AboutSection />
      <Contact />
      <Footer />
    </main>
  );
}
