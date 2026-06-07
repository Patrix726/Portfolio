import { DarkModeToggle, type Mode } from "@anatoliygatt/dark-mode-toggle";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
	const [mode, setMode] = useState<Mode>("light");

	useEffect(() => {
		document.documentElement.classList.toggle(
			"dark",
			localStorage.theme === "dark" ||
				(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
		);

		if (document.documentElement.classList.contains("dark")) {
			setMode("dark");
		}
	}, []);

	useEffect(() => {
		localStorage.theme = mode;

		document.documentElement.classList.toggle(
			"dark",
			localStorage.theme === "dark" ||
				(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
		);
	}, [mode]);
	return (
		<DarkModeToggle
			mode={mode}
			dark=""
			light=""
			size="sm"
			inactiveTrackColor="#e2e8f0"
			inactiveTrackColorOnHover="#f8fafc"
			inactiveTrackColorOnActive="#cbd5e1"
			activeTrackColor="#334155"
			activeTrackColorOnHover="#1e293b"
			activeTrackColorOnActive="#0f172a"
			inactiveThumbColor="#1e293b"
			activeThumbColor="#e2e8f0"
			onChange={(mode) => {
				setMode(mode);
			}}
		/>
	);
};
