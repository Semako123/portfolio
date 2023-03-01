import React from "react";
import "./header.css";
import { avatar, react_ico, node_ico, js_ico } from "../../assets/images";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Header = () => {
  return (
    <div className="oases__header section__padding">
      <div className="oases__header-content">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeOut"
          animatePreScroll={true}
          offset={10}
        >
          <p>Hello, I am</p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeOut"
        >
          <h3>{"<Zosu Semako />"}</h3>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeOut"
        >
          <h4>Front End Developer</h4>
        </AnimationOnScroll>

        <div className="oases__header-content_points">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
          >
            <div className="oases__header-content_point">
              <div>3</div>
              <div>YEARS OF EXPERIENCE</div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOut"
          >
            <div className="oases__header-content_point">
              <div>13+</div>
              <div>PROJECTS COMPLETED AROUND THE WORLD</div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        animateOut="animate__zoomOut"
      >
        <div className="oases__header-image">
          <div className="oases__header-image_frame">
            <img src={avatar} alt="avatar" />
            <div className="oases__header-image_icons ico1 pulsate-fwd">
              <img src={react_ico} alt="" />
            </div>
            <div className="oases__header-image_icons ico2 pulsate-fwd">
              <img src={js_ico} alt="" />
            </div>
            <div className="oases__header-image_icons ico3 pulsate-fwd">
              <img src={node_ico} alt="" />
            </div>
            <div className="c1 ping"></div>
            <div className="c2 ping"></div>
            <div className="c3 ping"></div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Header;
