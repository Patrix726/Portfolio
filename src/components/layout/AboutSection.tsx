import { motion } from "framer-motion";
import ToolCard from "../common/cards/ToolCard";
import { Reveal, RevealStagger, staggerItem } from "../Reveal";

const featuredSkills = [
	"React",
	"Node.js",
	"TypeScript",
	"PostgreSQL",
	"Next.js",
	"Tailwind",
	"Prisma",
];

export const AboutSection = () => {
	return (
		<section id="about" className="about-section">
			<Reveal>
				<div className="about-text">
					<p>
						I am a web developer pursuing my degree in Software Engineering at Adama Science and
						Technology University. I specialize in full-stack development with modern
						JavaScript/TypeScript ecosystems — from crafting pixel-perfect UIs with React to
						designing robust APIs with Node.js. I enjoy solving real-world problems through
						technology and contributing to open-source projects.
					</p>
				</div>
			</Reveal>
			<Reveal delay={0.15}>
				<div className="skills-compact">
					<h5 className="skills-label">#Skills</h5>
					<RevealStagger className="skills-pills">
						{featuredSkills.map((skill) => (
							<motion.div key={skill} variants={staggerItem}>
								<ToolCard title={skill} size="sm" />
							</motion.div>
						))}
					</RevealStagger>
				</div>
			</Reveal>
		</section>
	);
};
