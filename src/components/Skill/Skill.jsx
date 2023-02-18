import React from "react";
import "./skill.css";

const Skill = ({ children, img }) => {
  return (
    <div className="oases__skill">
      <img src={img} alt="img" />
      <p>{children}</p>
    </div>
  );
};

export default Skill;
