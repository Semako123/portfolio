import React from "react";
import "./experience.css";
import { Title } from "../../components";
import { calendar } from "../../assets/images";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Experience = () => {
  const expList = [
		{
			title: "Software Developer (Intern)",
			company: "IBTS 321",
			date: "2019",
		},
		{
			title: "Engineering Specialist",
			company: "GHIT",
			date: "2021",
			right: true,
		},
		{
			title: "Introduction to Computer Science (CS50)",
			company: "Harvard University",
			date: "2022",
		},
		{
			title: "Software Engineer",
			company: "GHIT",
			date: "2022",
			right: true,
		},
	];
  return (
    <div className="section__padding oases__experience">
      <AnimationOnScroll
        animateIn="animate__fadeInDown"
        animateOut="animate__fadeOut"
      >
        <Title>Experience ( )</Title>
      </AnimationOnScroll>

      <div className="oases__experience-content">
        {expList.map((x) => {
          if (!x.right) {
            return (
              <>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                >
                  <div className="oases__experience-content_text left">
                    {x.title}
                    <p>{x.company}</p>
                    <div className="oases__experience-content_date">
                      <img src={calendar} alt="ico" />
                      <p>{x.date}</p>
                    </div>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                >
                  <div className="oases__experience-content_stroke">
                    <div className="circle"></div>
                    <div className="stroke"></div>
                  </div>
                </AnimationOnScroll>

                <div className="oases__experience-content_text right"></div>
              </>
            );
          } else {
            return (
              <>
                <div className="oases__experience-content_text"></div>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                >
                  <div className="oases__experience-content_stroke">
                    <div className="circle"></div>
                    <div className="stroke"></div>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                >
                  <div className="oases__experience-content_text right">
                    {x.title}
                    <p>{x.company}</p>
                    <div className="oases__experience-content_date">
                      <img src={calendar} alt="ico" />
                      <p>{x.date}</p>
                    </div>
                  </div>
                </AnimationOnScroll>
              </>
            );
          }
        })}
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default Experience;
