import { Toaster } from "react-hot-toast";
import "./App.css";
import { AboutSection } from "./components/layout/AboutSection";
import { ContactSection } from "./components/layout/ContactSection";
import { ExperienceSection } from "./components/layout/ExperienceSection";
import { HeroSection } from "./components/layout/HeroSection";
import { Nav } from "./components/layout/Nav";
import { ProjectsSection } from "./components/layout/ProjectsSection";

function App() {
	return (
		<div className="overflow-x-hidden">
			<div className="bg-pattern" />
			<Toaster />
			<Nav />
			<main className="main-container">
				<HeroSection />
				<AboutSection />
				<ExperienceSection />
				<ProjectsSection />
				<ContactSection />
			</main>
			{/* <div className="decorator-wrapper"> */}
			{/* 	<div className="decorator" /> */}
			{/* </div> */}
		</div>
	);
}

export default App;
