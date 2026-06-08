type props = {
	title: string;
	bg?: "default" | "alt";
	size?: "sm" | "md" | "lg";
};

const sizes = {
	sm: "py-0.5 px-1 sm:py-1 sm:px-1.5 text-xs sm:text-sm font-medium",
	md: "py-1 px-2 sm:py-1.5 sm:px-3 md:text-base text-sm",
	lg: "py-2 px-4 sm:py-3 sm:px-6 sm:text-base md:text-lg",
};
const ToolCard = ({ title, bg = "default", size = "md" }: props) => {
	return (
		<div
			className={`${sizes[size]} ${
				bg === "default"
					? "bg-frame text-frame-foreground border-1 sm:border-2 border-frame"
					: "bg-main-background border-1 sm:border-2 border-frame/20"
			} `}
		>
			<p>{title}</p>
		</div>
	);
};

export default ToolCard;
