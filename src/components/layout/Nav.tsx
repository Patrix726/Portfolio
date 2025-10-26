import { ThemeToggle } from "../common/buttons/ThemeToggle";
import { Github, Linkedin, Send } from "../common/icons.ts";
import "./styles/nav.css";

export const Nav = () => {
	return (
		<nav className="nav-container">
			<ul className="flex gap-8">
				<a href="#" className="nav-link">
					<Github />
				</a>
				<a href="#" className="nav-link">
					<Send />
				</a>
				<a href="#" className="nav-link">
					<Linkedin />
				</a>
			</ul>
			<div className="h-6 w-0.5 bg-gray-700 dark:bg-gray-50"></div>
			<ThemeToggle />
		</nav>
	);
};
