import React, { useState } from "react";
import "./StickyMenu.css"; // Import the CSS
import Chatbot from "./ChatBot";

const StickyMenu = () => {
  const [isAnimating, setAnimating] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;

    const closeIcon = document.querySelector(".close-icon");
    const arrowIcon = document.querySelector(".arrow-icon");
    const menuItems = document.querySelectorAll(".menu-item");
    const itemTexts = document.querySelectorAll(".item-text");

    setOpen(!isOpen);

    if (isOpen) {
      closeIcon.classList.remove("show");
      closeIcon.classList.add("hide");
      arrowIcon.classList.remove("hide");
      arrowIcon.classList.add("show");
      menuItems.forEach((item) => item.classList.add("text-hides"));
      itemTexts.forEach((text) => {
        setTimeout(() => {
          text.classList.remove("text-in");
        });
      });
    } else {
      closeIcon.classList.remove("hide");
      closeIcon.classList.add("show");
      arrowIcon.classList.remove("show");
      arrowIcon.classList.add("hide");
      menuItems.forEach((item) => item.classList.remove("text-hides"));
      itemTexts.forEach((text, index) => {
        setTimeout(() => {
          text.classList.add("text-in");
        }, index * 150);
      });
    }
  };

  const handleAnimationStart = () => setAnimating(true);
  const handleAnimationEnd = () => setAnimating(false);

  return (
    <div className="sticky-menu-container">
      <div
        className={`outer-button ${isAnimating ? "clicked" : ""}`}
        onClick={handleClick}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="icon-container">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92 92"
            className="close-icon"
          >
            <path
              d="M70.7,64.3c1.8,1.8,1.8,4.6,0,6.4c-0.9,0.9-2,1.3-3.2,1.3c-1.2,0-2.3-0.4-3.2-1.3L46,52.4L27.7,70.7
              c-0.9,0.9-2,1.3-3.2,1.3s-2.3-0.4-3.2-1.3c-1.8-1.8-1.8-4.6,0-6.4L39.6,46L21.3,27.7c-1.8-1.8-1.8-4.6,0-6.4c1.8-1.8,4.6-1.8,6.4,0
              L46,39.6l18.3-18.3c1.8-1.8,4.6-1.8,6.4,0c1.8,1.8,1.8,4.6,0,6.4L52.4,46L70.7,64.3z"
            />
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92 92"
            className="arrow-icon"
          >
            <path
              d="M49.9,88c-0.2,0-0.4,0-0.6-0.1c-1.8-0.3-3.2-1.7-3.3-3.5l-3.5-34.8L7.6,46.1c-1.8-0.2-3.3-1.6-3.5-3.3
              c-0.3-1.8,0.7-3.5,2.3-4.3l76-34.1c1.5-0.7,3.3-0.4,4.5,0.8c1.2,1.2,1.5,3,0.8,4.5l-34.1,76C52.9,87.1,51.4,88,49.9,88z M23.3,39.7
              L46.4,42c1.9,0.2,3.4,1.7,3.6,3.6l2.4,23.1L76,16L23.3,39.7z"
            />
          </svg>
        </div>
      </div>
        
      <div onClick={!isOpen && handleClick} style={{cursor:!isOpen?'pointer':''}} className={`inner-menu ${isOpen ? "" : "closed"}`} >
          <Chatbot visible={isOpen}/>
      </div>
    </div>
  );
};

export default StickyMenu;
