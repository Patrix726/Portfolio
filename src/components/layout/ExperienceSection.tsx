import type { JSX } from "react/jsx-runtime";
import experiences from "../../data/experience.jsonc";
import ExperienceCard from "../common/cards/ExperienceCard";
import { Reveal } from "../Reveal";

type Experience = JSX.IntrinsicAttributes & {
	position: string;
	company: string;
	location?: string;
	from: Date;
	to: Date | "Present";
	description: string;
	stack: string[];
};

export const ExperienceSection = () => {
	return (
		<section id="experience" className="experience-section section">
			<Reveal>
				<h2>Experience</h2>
			</Reveal>
			<div className="flex gap-4 items-start">
				<div className="relative flex flex-col mt-2 gap-8 flex-2">
					<div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-frame/30 hidden sm:block"></div>
					{experiences.map((experience: Experience, idx: number) => (
						<Reveal key={experience.company} delay={idx * 0.1}>
							<ExperienceCard
								{...experience}
								from={new Date(experience.from)}
								to={experience.to === "Present" ? experience.to : new Date(experience.to)}
							/>
						</Reveal>
					))}
				</div>
				{/* <div className="flex-1 md:flex hidden items-center"> */}
				{/* 	<img src="/images/experience.png" alt="experience illustration" /> */}
				{/* </div> */}
			</div>
		</section>
	);
};
