import type { JSX } from "react/jsx-runtime";
import projects from "../../data/projects.jsonc";
import ProjectCard from "../common/cards/ProjectCard";
import { Reveal } from "../Reveal";

type Project = JSX.IntrinsicAttributes & {
	image?: string;
	title: string;
	description: string;
	stack: string[];
	links: { label: string; url: string }[];
	bg?: "default" | "alt";
};

export const ProjectsSection = () => {
	return (
		<section id="projects" className="projects-section section">
			<Reveal>
				<h2>Projects</h2>
			</Reveal>
			<div className="columns-[320px] gap-4 mt-4">
				{projects.map((project: Project, idx: number) => (
					<Reveal key={project.title} delay={idx * 0.1}>
						<ProjectCard {...project} />
					</Reveal>
				))}
			</div>
		</section>
	);
};
