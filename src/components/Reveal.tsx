import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

export const Reveal = ({ children, className, delay = 0 }: Props) => (
	<motion.div
		className={className}
		initial={{ opacity: 0, y: 40 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: "-80px" }}
		transition={{ duration: 0.6, delay, ease: "easeOut" }}
	>
		{children}
	</motion.div>
);

export const RevealStagger = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => (
	<motion.div
		className={className}
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, margin: "-80px" }}
		variants={{
			hidden: {},
			visible: { transition: { staggerChildren: 0.08 } },
		}}
	>
		{children}
	</motion.div>
);

export const staggerItem = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
