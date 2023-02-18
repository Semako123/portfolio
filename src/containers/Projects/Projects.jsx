import React from "react";
import "./projects.css";
import { Title, Project } from "../../components";
import { growfy, gpt, todo, omovies } from "../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination, EffectFade, Navigation } from "swiper";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  return (
    <div className="oases__projects section__padding" id="projects">
      <AnimationOnScroll
        animateIn="animate__fadeInDown"
        animateOut="animate__fadeOut"
      >
        <Title>Projects ( )</Title>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOut">
        <div className="oases__projects-cards">
          <Swiper
            modules={[Keyboard, Autoplay, Pagination, EffectFade, Navigation]}
            navigation={true}
            slidesPerView={2}
            spaceBetween={-50}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide>
              <Project
                title="Growfy"
                img={growfy}
                note="Growfy is a landing page developed for a marketing solutions company. It features animations, responsiveness, awesome layout as well as highly optimized images"
                tech="React, CSS, JavaScript"
                code_link="https://github.com/semako123/growfy"
                live_link="https://oasesgrowfy.netlify.app"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="GPT-3"
                img={gpt}
                note="GPT-3 is a website for an OpenAI. It features great layout, responsiveness and gradient design"
                tech="React,CSS, JavaScript"
                code_link="https://github.com/semako123/gpt3"
                live_link="https://oasesgpt3.netlify.app"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="Oases TODO"
                img={todo}
                note="Oases Todo is a todo list application where you can order and plan your events or tasks. It has an authentication feature, responsiveness, realtime clock, animations, easy-to-use UI and so on"
                tech="Firebase, Firestore, React, CSS, JavaScript, Redux, MaterialUI, React-Router"
                code_link="https://github.com/semako123/TodoList2.0"
                live_link="https://oasestodo.netlify.app"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                title="O-Movies"
                img={omovies}
                note="O-Movies is a web-application where you can get the detail of any movie, series or anime of your choice, It features great and easy-to-use UI, a search function, different section to explore different categories of movies."
                tech="React, CSS, JavaScript, REST API, Redux"
                code_link="https://github.com/semako123/omovies"
                live_link="https://oasesmovies.netlify.app"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Projects;
