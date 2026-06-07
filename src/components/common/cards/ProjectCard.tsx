import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ToolCard from "./ToolCard";

type props = {
	image?: string;
	title: string;
	description: string;
	stack: string[];
	links: { label: string; url: string }[];
	bg?: "default" | "alt";
};

const isGitHub = (label: string) => label.toLowerCase() === "github";

const ProjectCard = ({ title, description, links, stack, image }: props) => {
	return (
		<motion.div
			className="p-4 rounded-lg flex flex-col gap-2 break-inside-avoid-column border border-gray-700/30 dark:border-white/10 mb-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm"
			whileHover={{ y: -8, boxShadow: "0 20px 60px -12px rgba(247,105,53,0.18)" }}
			transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
		>
			{image && (
				<motion.img
					src={image}
					alt={`${title}'s thumbnail`}
					className="rounded-md"
					whileHover={{ scale: 1.03 }}
					transition={{ duration: 0.4 }}
				/>
			)}
			<h4 className="text-wrap">{title}</h4>
			<div className="flex gap-2 flex-wrap mb-2">
				{stack.map((tool) => (
					<ToolCard title={tool} size="sm" key={tool} />
				))}
			</div>
			<p className="text-sm sm:text-base">{description}</p>
			<div className="flex gap-3 flex-wrap mt-auto pt-3">
				{links.map((link) => {
					const github = isGitHub(link.label);
					return (
						<motion.a
							key={link.url}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.97 }}
							className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
								github
									? "border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
									: "bg-frame text-white shadow-sm hover:brightness-110"
							}`}
						>
							{github ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
							<span>{link.label}</span>
						</motion.a>
					);
				})}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
