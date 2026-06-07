import { Toaster } from "react-hot-toast";
import "./App.css";
import { AboutSection } from "./components/layout/AboutSection";
import { ContactSection } from "./components/layout/ContactSection";
import { ExperienceSection } from "./components/layout/ExperienceSection";
import { HeroSection } from "./components/layout/HeroSection";
import { LogoSection } from "./components/layout/LogoSection";
import { Nav } from "./components/layout/Nav";
import { ProjectsSection } from "./components/layout/ProjectsSection";
import { SkillsSection } from "./components/layout/SkillsSection";

function App() {
	return (
		<div className="overflow-x-hidden">
			<Toaster />
			<Nav />
			<main className="main-container">
				<LogoSection />
				<HeroSection />
				<AboutSection />
				<SkillsSection />
				<ExperienceSection />
				<ProjectsSection />
				<ContactSection />
			</main>
			<div className="decorator pointer-events-none"></div>
		</div>
	);
}

export default App;
