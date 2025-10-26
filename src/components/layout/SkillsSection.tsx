import ToolCard from "../common/cards/ToolCard";

const coreSkills = {
	Languages: ["Typescript", "Javascript", "Html", "CSS"],
	Frontend: ["React.js", "Next.js", "Tailwind"],
	Backend: ["Node.js", "Express.js"],
	"Database/ORM": ["PostgreSQL", "MongoDB", "Prisma"],
	Tools: ["Git & Github", "Figma", "Postman/Insomnia", "Linux"],
};

const otherSkills = {
	Languages: ["Python", "Java", "Go", "Bash", "Lua", "SQL"],
	Frontend: ["Svelte.js", "SvelteKit", "Remix"],
	Backend: ["Spring Boot", "Nest.js", "Django", "Hono.js"],
	"Database/ORM": ["MySql", "SQlite", "Drizzle"],
	DevOps: ["Github Actions", "Docker"],
};

export const SkillsSection = () => {
	return (
		<section className="skills-section section">
			<h2>Skills</h2>
			<p>
				I specialize in full-stack development with modern web technologies and
				have hands-on experience across a wide range of tools and frameworks.
			</p>
			<div className="flex gap-16">
				<div className="flex flex-col gap-2 pt-4">
					<h4>Core Stack/Skills</h4>
					{Object.entries(coreSkills).map(([title, skills], idx) => {
						return (
							<div key={idx} className="flex flex-col gap-2">
								<h6>{title}</h6>
								<div className="flex gap-2">
									{skills.map((skill, idx) => (
										<ToolCard title={skill} key={idx} />
									))}
								</div>
							</div>
						);
					})}
				</div>
				<div className="flex flex-col gap-2 pt-4">
					<h4>Also familiar with</h4>
					{Object.entries(otherSkills).map(([title, skills], idx) => {
						return (
							<div key={idx} className="flex flex-col gap-2">
								<h6>{title}</h6>
								<div className="flex gap-2">
									{skills.map((skill, idx) => (
										<ToolCard title={skill} key={idx} />
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
