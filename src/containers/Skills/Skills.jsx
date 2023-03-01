import React from "react";
import "./skills.css";
import { Title, Skill } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  react_ico,
  node_ico,
  js_ico,
  html_ico,
  boot_ico,
  git_ico,
  css_ico,
  python_ico,
  linux_ico,
  redux_ico,
} from "../../assets/images";

const Skills = () => {
  const skillsList = [
    { name: "React", img: react_ico },
    { name: "Nodejs", img: node_ico },
    { name: "JavaScript", img: js_ico },
    { name: "HTML 5", img: html_ico },
    { name: "Git", img: git_ico },
    { name: "CSS", img: css_ico },
    { name: "Python", img: python_ico },
    { name: "Linux", img: linux_ico },
    { name: "Redux", img: redux_ico },
    { name: "Bootstrap", img: boot_ico },
  ];
  return (
    <div className="oases__skills section__padding" id="skills">
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOut="animate__fadeOut"
      >
        <Title>Technologies( )</Title>
      </AnimationOnScroll>
      <div className="oases__skills-cards">
        {skillsList.map((x) => (
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            key={x.name}
          >
            <Skill img={x.img}>{x.name}</Skill>
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Skills;
