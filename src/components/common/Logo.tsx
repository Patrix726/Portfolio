import "./styles/logo.css";

type size = "sm" | "md" | "lg";

export const Logo = ({ size }: { size: size }) => {
	return (
		<div className={`${size} logo-container`}>
			<img src="/logo.png" className="logo-img" />
		</div>
	);
};
