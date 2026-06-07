import { motion } from "framer-motion";
import coreSkills from "../../data/core-skills.json";
import otherSkills from "../../data/other-skills.json";
import ToolCard from "../common/cards/ToolCard";
import { Reveal, RevealStagger, staggerItem } from "../Reveal";

export const SkillsSection = () => {
	return (
		<section id="skills" className="skills-section section">
			<Reveal>
				<h2 className="mb-2">Skills</h2>
				<p>
					I specialize in full-stack development with modern web technologies and have hands-on
					experience across a wide range of tools and frameworks.
				</p>
			</Reveal>
			<div className="flex flex-wrap gap-6 md:gap-12 mt-4">
				<Reveal delay={0.1}>
					<div className="flex flex-col gap-2 pt-4">
						<h4>Core Stack/Skills</h4>
						{Object.entries(coreSkills).map(([title, skills]) => (
							<div key={title} className="flex flex-col gap-2">
								<h6>{title}</h6>
								<RevealStagger className="flex gap-2 items-start flex-wrap">
									{skills.map((skill) => (
										<motion.div key={skill} variants={staggerItem}>
											<ToolCard title={skill} />
										</motion.div>
									))}
								</RevealStagger>
							</div>
						))}
					</div>
				</Reveal>
				<Reveal delay={0.2}>
					<div className="flex flex-col gap-2 pt-4">
						<h4>Also familiar with</h4>
						{Object.entries(otherSkills).map(([title, skills]) => (
							<div key={title} className="flex flex-col gap-2">
								<h6>{title}</h6>
								<RevealStagger className="flex gap-2 items-start flex-wrap">
									{skills.map((skill) => (
										<motion.div key={skill} variants={staggerItem}>
											<ToolCard title={skill} />
										</motion.div>
									))}
								</RevealStagger>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
};
