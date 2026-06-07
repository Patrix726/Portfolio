import ToolCard from "./ToolCard";

type props = {
	position: string;
	company: string;
	location?: string;
	from: Date;
	to: Date | "Present";
	description: string;
	stack: string[];
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ExperienceCard = ({ company, description, from, position, stack, to, location }: props) => {
	let duration: string;
	if (to === "Present") {
		duration = `${months[from.getMonth()]} ${from.getFullYear()} - Present`;
	} else if (from.getFullYear() !== to.getFullYear()) {
		duration = `${months[from.getMonth()]} ${from.getFullYear()} - ${months[to.getMonth()]} ${to.getFullYear()}`;
	} else {
		duration = `${months[from.getMonth()]} - ${months[to.getMonth()]} ${to.getFullYear()}`;
	}
	return (
		<div className="p-6 rounded-lg flex gap-6 max-w-[800px] relative">
			<div className="hidden sm:flex flex-col items-center mt-2">
				<div className="w-3 h-3 rounded-full bg-frame ring-2 ring-frame/30 shrink-0"></div>
			</div>
			<div className="flex justify-start flex-2 mt-2 min-w-[90px]">
				<p className="dark:text-gray-200 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
					{duration}
				</p>
			</div>
			<div className="flex flex-col gap-4 flex-5">
				<div className="flex flex-col gap-1">
					<h4>
						{position}{" "}
						<span className="text-sm sm:text-lg md:text-xl font-light inline-block italic">
							@ {company}
						</span>
					</h4>
					{location && (
						<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-200">{location}</p>
					)}
				</div>
				<p className="text-gray-600 dark:text-gray-300">{description}</p>

				<div className="flex gap-2 flex-wrap">
					{stack.map((tool) => (
						<ToolCard title={tool} bg="alt" key={tool} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
