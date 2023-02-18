import React from "react";
import "./footer.css";
import { linkedIn, github, twitter } from "../../assets/images";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOut"  offset={40}>
      <div className="section__padding oases__footer">
        <div className="oases__navbar-logo">
          <h3>
            <a href="/">
              ZOSU<span>SEMAKO</span>
            </a>
          </h3>
        </div>
        <div className="oases__footer-logo">
          <a
            href="https://www.linkedin.com/in/semako-zosu/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="linkedIn" />
          </a>
          <a
            href="https://github.com/semako123"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github" />
          </a>
          <a
            href="https://twitter.com/zosusemako/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Footer;
