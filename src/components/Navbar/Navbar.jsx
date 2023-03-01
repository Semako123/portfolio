import React from "react";
import "./navbar.css";
import { linkedIn, github, mail, twitter } from "../../assets/images";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Navbar = () => {
  return (
    <div className="oases__navbar">
      <div className="oases__navbar-logo">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOut"
          offset={0}
        >
          <h3>
            <a href="/">
              ZOSU<span>SEMAKO</span>
            </a>
          </h3>
        </AnimationOnScroll>
      </div>
      <div className="oases__navbar-navlinks">
        <ul>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={10}
          >
            <li>
              <a href="#about" id="about_link">
                About
              </a>
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={10}
          >
            <li>
              <a href="#skills" id="skills_link">
                Skills
              </a>
            </li>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
            offset={10}
          >
            <li>
              <a href="#projects" id="projects_link">
                Projects
              </a>
            </li>
          </AnimationOnScroll>
        </ul>
      </div>
      <div className="oases__navbar-contact">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOut"
          offset={10}
        >
          <a
            href="https://www.linkedin.com/in/semako-zosu/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <img src={linkedIn} alt="linkedIn" /> <p>LinkedIn</p>
            </div>
          </a>
          <a
            href="https://twitter.com/zosusemako/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <img src={twitter} alt="twitter" /> <p>Twitter</p>
            </div>
          </a>
          <a
            href="https://github.com/semako123"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <img src={github} alt="github" /> <p> Github</p>
            </div>
          </a>
          <a href="#contact" rel="noreferrer" id="contact_link">
            <div>
              <img src={mail} alt="contact" />
              Contact me
            </div>
          </a>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Navbar;
