import { ThemeToggle } from "../common/buttons/ThemeToggle";
import { Github, Linkedin, Send } from "../common/icons.ts";
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
		<nav className="nav-container">
			{/* <ul className="hidden md:flex gap-6 text-sm font-medium"> */}
			{/* 	{links.map((link) => ( */}
			{/* 		<li key={link.href}> */}
			{/* 			<a */}
			{/* 				href={link.href} */}
			{/* 				className="nav-link text-xs lg:text-sm" */}
			{/* 			> */}
			{/* 				{link.label} */}
			{/* 			</a> */}
			{/* 		</li> */}
			{/* 	))} */}
			{/* </ul> */}
			<ul className="flex gap-4 md:gap-6">
				<a
					href="https://github.com/nebil"
					target="_blank"
					rel="noopener noreferrer"
					className="nav-icon"
				>
					<Github className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
				</a>
				<a href="#contact" className="nav-icon">
					<Send className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
				</a>
				<a
					href="https://linkedin.com/in/nebil"
					target="_blank"
					rel="noopener noreferrer"
					className="nav-icon"
				>
					<Linkedin className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-4 h-4" />
				</a>
			</ul>
			<div className="h-6 w-[1px] md:w-0.5 bg-gray-700 dark:bg-gray-50"></div>
			<ThemeToggle />
		</nav>
	);
};
