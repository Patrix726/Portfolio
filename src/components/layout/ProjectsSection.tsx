import projects from "../../data/projects.json";
import ProjectCard from "../common/cards/ProjectCard";
import { Reveal } from "../Reveal";

export const ProjectsSection = () => {
	return (
		<section id="projects" className="projects-section section">
			<Reveal>
				<h2>Projects</h2>
			</Reveal>
			<div className="columns-1 md:columns-2 lg:columns-3 gap-4 mt-4">
				{projects.map((project, idx) => (
					<Reveal key={project.title} delay={idx * 0.1}>
						<ProjectCard {...project} />
					</Reveal>
				))}
			</div>
		</section>
	);
};
