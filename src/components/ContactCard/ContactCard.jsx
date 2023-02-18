import React from "react";
import "./ContactCard.css";

const ContactCard = ({ img, children, sub_title, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="oases__contact-card">
        <div className="oases__contact-card-image">
          <img src={img} alt="" />
        </div>
        <p className="oases__contact-card-title">{children}</p>
        <p className="oases__contact-card-subtitle">{sub_title}</p>
      </div>
    </a>
  );
};

export default ContactCard;
