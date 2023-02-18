import React from "react";
import "./CTA.css";

const CTA = ({ children, cta_text, img, link }) => {
  return (
    <div className="oases__cta">
      <div className="oases__cta-content">
        <h6>{children}</h6>
        <a href={link}>
          <p>{cta_text}</p>
        </a>
      </div>
      <div className="oases__cta-image">
        <img src={img} alt="cta" />
      </div>
    </div>
  );
};

export default CTA;
