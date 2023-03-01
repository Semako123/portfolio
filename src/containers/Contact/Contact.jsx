import React from "react";
import "./contact.css";
import { Title, ContactCard } from "../../components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  gmail,
  whatsapp,
  phone,
  twitter2,
  linkedInG,
} from "../../assets/images";

const Contact = () => {
  const contactList = [
    {
      sub_title: "zosusemenoch@gmail.com",
      link: "mailto:zosusemenoch@gmail.com",
      title: "Email",
      img: gmail,
    },
    {
      sub_title: "Connect",
      link: "https://www.linkedin.com/in/semako-zosu/",
      title: "LinkedIn",
      img: linkedInG,
    },
    {
      sub_title: "@zosusemako",
      link: "https://twitter.com/zosusemako/",
      title: "Twitter",
      img: twitter2,
    },
    {
      sub_title: "Message",
      link: "https://wa.me/07044746657",
      title: "WhatsApp",
      img: whatsapp,
    },

    {
      sub_title: "Call me",
      link: "tel:+2347044746657",
      title: "Phone",
      img: phone,
    },
  ];
  return (
    <div className="oases__contact section__padding" id="contact">
      <AnimationOnScroll
        animateIn="animate__fadeInDown"
        animateOut="animate__fadeOut"
        offset={130}
      >
        <Title>Contact( )</Title>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__slideInLeft"
        animateOut="animate__fadeOut"
      >
        <p className="oases__contact-text">
          Get in touch. Let's build something amazing together
        </p>
      </AnimationOnScroll>

      <div className="oases__contact-cards">
        {contactList.map((x) => (
          <AnimationOnScroll
            animateIn="animate__zoomIn"
            animateOut="animate__fadeOut"
            delay={500}
            key={x.link}
          >
            <ContactCard sub_title={x.sub_title} link={x.link} img={x.img}>
              {x.title}
            </ContactCard>
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Contact;
