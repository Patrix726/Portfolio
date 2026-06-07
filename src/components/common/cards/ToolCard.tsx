type props = {
	title: string;
	bg?: "default" | "alt";
	size?: "sm" | "md" | "lg";
};

const sizes = {
	sm: "py-1 px-2 text-xs sm:text-sm font-medium rounded",
	md: "py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg md:text-base text-sm",
	lg: "py-2 px-4 sm:py-3 sm:px-6 sm:text-base md:text-lg rounded-lg",
};
const ToolCard = ({ title, bg = "default", size = "md" }: props) => {
	return (
		<div
			className={`${sizes[size]} ${
				bg === "default"
					? "bg-frame border-2 border-frame border-b-[3px]"
					: "bg-main-background border-2 border-frame/20 border-b-[3px]"
			} `}
		>
			<p>{title}</p>
		</div>
	);
};

export default ToolCard;
