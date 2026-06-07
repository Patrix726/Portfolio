import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const isDark =
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
		document.documentElement.classList.toggle("dark", isDark);
		setDark(isDark);
	}, []);

	const toggle = () => {
		const next = !dark;
		setDark(next);
		localStorage.theme = next ? "dark" : "light";
		document.documentElement.classList.toggle("dark", next);
	};

	return (
		<button
			type="button"
			onClick={toggle}
			className="text-foreground hover:scale-110 transition-all cursor-pointer"
			aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
		>
			{dark ? <Sun className="w-5 h-5 sm:w-6 sm:h-6" /> : <Moon className="w-5 h-5 sm:w-6 sm:h-6" />}
		</button>
	);
};
