import "./styles/sections.css";
import { motion } from "framer-motion";

export const HeroSection = () => {
	return (
		<section id="hero" className="hero-section">
			<div className="hero-inner">
				<motion.div
					className="hero-photo"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					whileHover={{ y: -4, scale: 1.02 }}
				>
					<div className="hero-photo-clip">
						<img src="/images/headshot.png" alt="Nebil Rahmeto" />
					</div>
				</motion.div>
				<div className="hero-text">
					<motion.p
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Hi, I'm
					</motion.p>
					<motion.h1
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<span className="bg-gradient-to-r from-frame via-[#6c757d] to-[#adb5bd] dark:from-frame dark:via-[#ced4da] dark:to-[#dee2e6] bg-clip-text text-transparent hidden sm:flex">
							Nebil Rahmeto
						</span>
						<span className="bg-gradient-to-r from-frame via-[#6c757d] to-[#adb5bd] dark:from-frame dark:via-[#ced4da] dark:to-[#dee2e6] bg-clip-text text-transparent flex sm:hidden">
							Nebil
						</span>
					</motion.h1>
					<motion.h5
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						I build things for the web
					</motion.h5>
				</div>
			</div>
		</section>
	);
};
