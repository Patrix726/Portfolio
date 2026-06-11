import { ThemeToggle } from "../common/buttons/ThemeToggle";
import { FileText, Github, Linkedin, Send } from "../common/icons.ts";
import "./styles/nav.css";

// const links = [
// 	{ label: "About", href: "#about" },
// 	{ label: "Skills", href: "#skills" },
// 	{ label: "Experience", href: "#experience" },
// 	{ label: "Projects", href: "#projects" },
// 	{ label: "Contact", href: "#contact" },
// ];

export const Nav = () => {
	return (
		<div className="nav-wrapper">
			<nav className="nav-container">
				<ul className="flex gap-4 md:gap-6">
					<a
						href="https://github.com/nebilra/resume/releases/latest/download/resume.pdf"
						download
						className="nav-icon"
						aria-label="Resume"
						title="Download resume"
					>
						<FileText className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
					</a>
					<a
						href="https://github.com/nebilra"
						target="_blank"
						rel="noopener noreferrer"
						className="nav-icon"
						aria-label="Github profile"
						title="Github profile"
					>
						<Github className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
					</a>
					<a href="#contact" className="nav-icon" aria-label="Contact me" title="Contact me">
						<Send className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
					</a>
					<a
						href="https://linkedin.com/in/nebilrahmeto"
						target="_blank"
						rel="noopener noreferrer"
						className="nav-icon"
						aria-label="Linkedin profile"
						title="Linkedin profile"
					>
						<Linkedin className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
					</a>
				</ul>
				<div className="h-6 w-[1px] md:w-0.5 bg-frame-foreground/30"></div>
				<ThemeToggle />
			</nav>
		</div>
	);
};
