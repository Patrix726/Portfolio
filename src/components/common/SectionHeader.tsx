import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const SectionHeader = ({ children }: Props) => (
	<div className="flex flex-col gap-1.5">
		<h2>{children}</h2>
		<div className="w-3/4 h-0.5 bg-gradient-to-r from-frame to-transparent" />
	</div>
);
