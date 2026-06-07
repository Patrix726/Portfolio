import "./styles/sections.css";
import { motion } from "framer-motion";
import Squares from "../Squares";

export const HeroSection = () => {
	return (
		<div className="h-full relative">
			{/* <div className="absolute z-0 opacity-20 will-change-transform top-0 bottom-0"> */}
			{/* 	<Squares direction="diagonal" speed={0.3} squareSize={50} hoverFillColor="#f76935" /> */}
			{/* </div> */}
			<section id="hero" className="hero-section section relative">
				<div className="left relative z-10 pointer-events-none">
					<motion.h5
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						Hello there, I'm{" "}
					</motion.h5>
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="bg-gradient-to-r from-frame via-purple-500 to-blue-500 dark:from-orange-300 dark:via-purple-300 dark:to-blue-300 bg-clip-text text-transparent"
					>
						Nebil Rahmeto
					</motion.h1>
					<motion.h3
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						I build things for the web
					</motion.h3>
				</div>
				<div className="right sm:flex hidden items-center relative z-10 pointer-events-none">
					<img src="/images/headshot.png" alt="Face headshot" className="headshot" />
					<div className="pattern md:block hidden"></div>
				</div>
			</section>
		</div>
	);
};
