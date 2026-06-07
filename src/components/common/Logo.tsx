import "./styles/logo.css";

type size = "sm" | "md" | "lg";

export const Logo = ({ size }: { size: size }) => {
	return (
		<div className={`${size} logo-container`}>
			<img src="/images/logo.png" alt="Logo" className="logo-img" />
		</div>
	);
};
