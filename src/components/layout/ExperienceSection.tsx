import ExperienceCard from "../common/cards/ExperienceCard";

const experiences = [
	{
		position: "Full-Stack Developer",
		company: "HealthTrack EMR",
		location: "Addis Ababa, Ethiopia",
		from: new Date(2024, 0), // January 2024
		to: "Present" as const,
		description:
			"Developing an electronic medical records system with role-based dashboards for doctors, patients, and receptionists using Next.js, Prisma, and PostgreSQL.",
		stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
	},
	{
		position: "Backend Developer Intern",
		company: "Learnify eLearning",
		location: "Remote",
		from: new Date(2023, 5), // June 2023
		to: new Date(2023, 11), // December 2023
		description:
			"Contributed to building a real-time tutoring platform using Socket.io for live sessions and Express.js with MongoDB for backend APIs.",
		stack: ["Express.js", "MongoDB", "Socket.io", "Node.js"],
	},
	{
		position: "Freelance Web Developer",
		company: "Self-Employed",
		location: "Remote",
		from: new Date(2022, 8), // September 2022
		to: new Date(2023, 4), // May 2023
		description:
			"Delivered responsive websites and small web apps for clients, focusing on performance optimization and clean UI/UX.",
		stack: ["React", "Next.js", "Vercel", "Tailwind CSS"],
	},
	{
		position: "Frontend Developer (Part-Time)",
		company: "UniTech Solutions",
		location: "Addis Ababa, Ethiopia",
		from: new Date(2021, 10), // November 2021
		to: new Date(2022, 6), // July 2022
		description:
			"Implemented frontend interfaces for internal management tools and dashboards, collaborating closely with backend engineers.",
		stack: ["React", "Redux", "REST API", "Bootstrap"],
	},
];

export const ExperienceSection = () => {
	return (
		<section className="experience-section section">
			<h2>Experience</h2>
			<div className="flex gap-4 items-center">
				<div className="flex flex-col mt-2 gap-8 flex-2">
					{experiences.map((experience) => (
						<ExperienceCard key={experience.company} {...experience} />
					))}
				</div>
				<div className="flex-1">
					<img src="/experience.png" alt="experience illustration" />
				</div>
			</div>
		</section>
	);
};
