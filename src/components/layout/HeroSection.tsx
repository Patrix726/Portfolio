import "./styles/sections.css";

export const HeroSection = () => {
	return (
		<section className="hero-section section">
			<div className="left">
				<h5>Hello there, I'm </h5>
				<h1>Nebil Rahmeto</h1>
				<h3>I build things for the web</h3>
			</div>
			<div className="right">
				<img src="/headshot.png" alt="Face headshot" className="headshot" />
				{/* <img src={circuitPattern} className="pattern" /> */}
				{/* <img src={blobPattern} className="pattern" /> */}
				<div className="pattern"></div>
			</div>
		</section>
	);
};
