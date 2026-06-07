import { Reveal } from "../Reveal";

export const AboutSection = () => {
	return (
		<section id="about" className="about-section section">
			<Reveal>
				<h2>About me</h2>
			</Reveal>
			<div className="flex gap-8">
				<div className="flex-2 flex flex-col gap-4">
					<Reveal delay={0.1}>
						<p className="text-sm sm:text-lg md:text-xl leading-relaxed">
							I am a web developer currently pursuing my degree in Software Engineering at Adama
							Science and Technology University. I am passionate about creating beautiful and
							functional websites that provide an enjoyable user experience
						</p>
					</Reveal>
					<Reveal delay={0.2}>
						<p className="text-sm sm:text-lg md:text-xl leading-relaxed">
							My journey into development started with curiosity about how websites work, which
							quickly turned into a deep passion for building them. I specialize in full-stack
							development with modern JavaScript/TypeScript ecosystems — from crafting pixel-perfect
							UIs with React to designing robust APIs with Node.js.
						</p>
					</Reveal>
					<Reveal delay={0.3}>
						<p className="text-sm sm:text-lg md:text-xl leading-relaxed">
							Beyond code, I enjoy solving real-world problems through technology, contributing to
							open-source projects, and staying curious about emerging tools and patterns. When I am
							not coding, you will find me exploring new frameworks or tinkering with Linux configs.
						</p>
					</Reveal>
				</div>
				<div className="flex-1 md:flex hidden items-center">
					<img src="/images/programming-1.png" alt="Programming illustration" className="flex-1" />
				</div>
			</div>
		</section>
	);
};
