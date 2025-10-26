type props = {
	title: string;
	bg?: "default" | "alt";
};
const ToolCard = ({ title, bg = "default" }: props) => {
	return (
		<div
			className={`p-2 px-4 ${bg === "default" ? "bg-frame" : "bg-main-background"} rounded-lg`}
		>
			<p>{title}</p>
		</div>
	);
};

export default ToolCard;
