import "./project.css";
import React from "react";
import { live, code } from "../../assets/images";
import { useState } from "react";

const Project = ({ title, img, note, tech, code_link, live_link }) => {
  const [over, setOver] = useState(false);

  return (
    <div
      className="oases__project"
      onMouseOver={() => {
        setOver(true);
      }}
      onMouseOut={() => {
        setOver(false);
      }}
    >
      <div className="oases__project-image">
        <img src={img} alt="" />
        <div className={`oases__project-details ${over ? "hovered" : ""}`}>
          <h3>{note}</h3>
          <h5>Technologies used: {tech}</h5>
        </div>
      </div>
      <div className="oases__project-cta">
        <h4>{title}</h4>
        <div>
          <a href={live_link} target="_blank" rel="noreferrer">
            <button>
              Live
              <img src={live} alt="live" />
            </button>
          </a>
          <a href={code_link} target="_blank" rel="noreferrer">
            <button>
              Code
              <img src={code} alt="code" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
