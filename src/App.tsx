import './App.css'
import Navbar from "@/Pages/Navbar.tsx";
import HeroSection from "@/Pages/HeroSection.tsx";
import AboutSection from "@/Pages/AboutSection.tsx";
import ExperienceSection from "@/Pages/ExperienceSection.tsx";
import SkillsSection from "@/Pages/SkillsSection.tsx";
import ProjectsSection from "@/Pages/ProjectsSection.tsx";
import ContactSection from "@/Pages/ContactSection.tsx";
import {SEO} from "@/components/SEO.tsx";

function App() {
    return (
        <div className="app-container">
            <SEO />

            <Navbar/>

            <main className="main-content">
                <section id="hero" className="hero-section">
                    <HeroSection/>
                </section>

                <section id="about" className="section">
                    <AboutSection/>
                </section>

                <section id="experience" className="section">
                    <ExperienceSection/>
                </section>

                <section id="skills" className="section">
                    <SkillsSection/>
                </section>

                <section id="projects" className="section">
                    <ProjectsSection/>
                </section>

                <section id="contact" className="section">
                    <ContactSection/>
                </section>
            </main>
        </div>
    )
}

export default App