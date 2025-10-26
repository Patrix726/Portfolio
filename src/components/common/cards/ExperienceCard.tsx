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

const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const ExperienceCard = ({
	company,
	description,
	from,
	position,
	stack,
	to,
	location,
}: props) => {
	let duration;
	if (to === "Present") {
		duration = `${months[from.getMonth()]} ${from.getFullYear()} - Present`;
	} else if (from.getFullYear() !== to.getFullYear()) {
		duration = `${months[from.getMonth()]} ${from.getFullYear()} - ${months[to.getMonth()]} ${to.getFullYear()}`;
	} else {
		duration = `${months[from.getMonth()]} - ${months[to.getMonth()]} ${to.getFullYear()}`;
	}
	return (
		<div className="p-6 rounded-lg flex gap-4 max-h-96 max-w-[800px]">
			<div className="flex justify-start flex-2 mt-2">
				<p className="dark:text-gray-200 text-gray-600 text-sm">{duration}</p>
			</div>
			<div className="flex flex-col gap-4 flex-5">
				<div className="flex flex-col gap-1">
					<h4>
						{position} . <span className="text-xl font-light">{company}</span>
					</h4>
					{location && (
						<p className="text-sm text-gray-600 dark:text-gray-200">
							{location}
						</p>
					)}
				</div>
				<p className="max-h-60 text-gray-600 dark:text-gray-300">
					{description}
				</p>

				<div className="flex gap-2 flex-wrap">
					{stack.map((tool) => (
						<ToolCard title={tool} bg="alt" />
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
