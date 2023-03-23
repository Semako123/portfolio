import React from "react";
import "./about.css";
import { Title, CTA } from "../../components";
import { cta_ico1, cta_ico2, download } from "../../assets/images";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
	return (
		<div className="oases__about section__padding" id="about">
			<AnimationOnScroll
				animateIn="animate__fadeInDown"
				animateOut="animate__fadeOut">
				<Title>{"About Me( )"}</Title>
			</AnimationOnScroll>

			<div className="oases__about-content">
				<div className="oases__about-content_text">
					<AnimationOnScroll
						animateIn="animate__fadeInUp"
						animateOut="animate__fadeOut">
						<p>
							Semako is a passionate frontend developer who is currently
							pursuing a degree in Electrical and Electronics Engineering at
							University of Lagos. With a deep interest in web development, I
							have been honing my skills in creating responsive, interactive and
							user-friendly interfaces using a variety of modern tools and
							technologies. As a budding frontend developer, I have already
							gained extensive experience in working with React and its vast
							ecosystem of libraries and frameworks. I am well-versed in
							building complex user interfaces, managing state, handling user
							inputs, and integrating with APIs and backend services.
							Additionally, I have a keen eye for design and is skilled in
							creating stunning visual layouts that meet the needs of my clients
							and users.
							<br />
							My expertise in frontend development is not limited to technical
							skills alone. I am also an excellent communicator and team player,
							with a proven track record of collaborating effectively with other
							developers, designers, and stakeholders. I am always eager to
							learn new things, experiment with emerging technologies, and push
							the boundaries of what's possible on the web. Looking ahead, I am
							excited to continue their journey as a frontend developer and
							build cutting-edge web applications that delight users and solve
							real-world problems.
						</p>
						<a
							href="https://docs.google.com/document/d/13EUl8b8lUC9Jz2O8EgURBTk1jt4q5Uv8g67TfS8immE/edit?usp=sharing"
							target="_blank"
							rel="noreferrer"
							download={true}>
							<button className="oases__about-cv">
								<img src={download} alt="" /> Download CV
							</button>
						</a>
					</AnimationOnScroll>
				</div>
				<div className="oases__about-content_cta">
					<AnimationOnScroll
						animateIn="animate__zoomInUp"
						animateOut="animate__fadeOut">
						<CTA cta_text="Projects" img={cta_ico1} link="#projects">
							Front End Developer
						</CTA>
					</AnimationOnScroll>
					<AnimationOnScroll
						animateIn="animate__zoomInUp"
						animateOut="animate__fadeOut">
						<CTA
							cta_text="Hire me!"
							img={cta_ico2}
							link="https://www.linkedin.com/in/semako-zosu/">
							Freelancer
						</CTA>
					</AnimationOnScroll>
				</div>
			</div>
		</div>
	);
};

export default About;
