import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/sections/ExperienceSection"; // Import new Experience section

export default function Home() {
  return (
    // Removed flex min-h-screen flex-col as sections handle height
    <main>
      {/* Assign IDs matching Navbar links */}
      <HeroSection id="home" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ExperienceSection id="experience" /> {/* Add Experience Section */}
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
      <Footer />
    </main>
  );
}
