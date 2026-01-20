import { useEffect, useRef } from "react";
import Socials from "../components/Socials";
import Tourbutton from "../components/Tourbutton";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";

import victoryHand from "../assets/imgs/victory_hand.png";

const About = () => {
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);
	const ref5 = useRef(null);

	useEffect(() => {
		const element1 = ref1.current;
		const element2 = ref2.current;
		const element3 = ref3.current;
		const element4 = ref4.current;
		const element5 = ref5.current;

		gsap.from(element1, 1, {
			delay: 1,
			ease: "Elastic.easeOut",
			opacity: 0,
			x: -20,
		});

		gsap.from(element2, 1.5, {
			delay: 1.5,
			ease: "power3.out",
			x: -20,
			opacity: 0,
		});

		gsap.from(element3, 1.5, {
			delay: 1.5,
			ease: "Bounce.easeOut",
			y: 50,
			opacity: 0,
		});

		gsap.from(element4, 1.5, {
			delay: 1.5,
			ease: "power3.out",
			x: -20,
			opacity: 0,
		});

		gsap.from(element5, 1.5, {
			delay: 1.5,
			ease: "power3.out",
			x: -20,
			opacity: 0,
		});
	}, []);

	return (
		<section className="about-content">
			<Helmet>
				<title>Peter Olawale | About</title>
			</Helmet>
			<div className="left-section">
				<div className="left-section-content">
					<div className="container">
						<h2 ref={ref1}>
							About Me <span className="emoji">✌🏾</span>
						</h2>
						<p ref={ref2} className="about-p">
							I focus on creating web experiences that are clear, efficient, and user-centered. I approach development with a growth mindset, continuously improving my skills while embracing both modern tools and time-tested solutions. My daily objective is consistent progress—learning. When  I'm not working, I stay curious through tech blogs, play football and unwind with video games.
						</p>
						<p ref={ref4} className="about-p">
							Technologies & Tools: React, JavaScript, TypeScript, Next.js, TailwndCss, Firebase Supabase.
						</p>
						<p ref={ref5} className="about-p">
							You can find my resume{" "}
							<a
								className="send-email-btn"
								href="https://drive.google.com/file/d/16Ig5vZu8LWJ4q4xkJs_y86-cJrAVo_s8/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
							>
								Here.
							</a>
						</p>

						<div className="social-links">
							<Socials />
							<Tourbutton path="/projects" text="continue" />
						</div>
					</div>
				</div>
			</div>
			<div className="right-section">
				<div className="hand-img" ref={ref3}>
					<img src={victoryHand} alt="hello" />
				</div>
			</div>
		</section>
	);
};

export default About;
