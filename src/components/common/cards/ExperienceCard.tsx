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
		<div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-1 sm:gap-6 max-w-[800px] relative">
			<div className="hidden sm:flex flex-col items-center mt-2 sm:w-8">
				<div className="w-3 h-3 bg-frame ring-2 ring-frame/30 shrink-0"></div>
			</div>
			<div className="sm:mt-2 sm:w-[115px] shrink-0">
				<p className="text-muted-foreground text-xs sm:text-sm whitespace-nowrap">{duration}</p>
			</div>
			<div className="flex flex-col gap-4 flex-1 sm:ml-6">
				<div className="flex flex-col gap-1">
					<h4>
						{position}{" "}
						<span className="text-sm sm:text-lg md:text-xl font-light inline-block italic">
							@ {company}
						</span>
					</h4>
					{location && <p className="text-xs sm:text-sm text-muted-foreground">{location}</p>}
				</div>
				<p className="text-muted-foreground">{description}</p>

				<div className="flex gap-2 flex-wrap">
					{stack.map((tool) => (
						<ToolCard title={tool} bg="alt" key={tool} size="sm" />
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
