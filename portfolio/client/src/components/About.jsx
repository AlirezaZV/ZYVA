import React from "react";
import { useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef();

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            30,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <Tilt className="xs:w-[250px] w-full" options={defaultOptions}>
      <motion.div
        ref={cardRef}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="card"
        onMouseMove={handleMouseMove}
      >
        <div className="card-content">
          <div className="card-image">
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <div className="card-info-title">
                <h3>{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a graphic artist, UI/UX designer, and web developer with expertise in modern technologies and design tools. 
        I graduated in Software Engineering from Birjand University of Technology in 2020. 
        Since 2015, I have worked as a freelance graphic designer, completing over 100 diverse projects. 
        Over the years, I have also developed skills in React.js, React Native, Three.js, GSAP, Webflow, Next.js, Node.js with Express, 
        PostgreSQL, UI/UX design using Figma, and 3D modeling in Blender.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-4'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
