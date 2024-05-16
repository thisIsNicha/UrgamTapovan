import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Explore.css';

const CustomLink: React.FC  = () => {
  useEffect(() => {
    // JavaScript logic
    let link = document.querySelector(".exp-link");
    let pink = document.querySelector(".exp-color");

    if (!link || !pink) return;

    let hoverTL = gsap.timeline();
    hoverTL.pause();

    hoverTL.to(pink, {
      width: "calc(100% + 1.3em)",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.2
    });
    hoverTL.to(pink, {
      width: "2em",
      left: "calc(100% - 1.45em)",
      ease: "Elastic.easeOut(0.4)",
      duration: 0.3
    });

    link.addEventListener("mouseenter", () => {
      hoverTL.play();
    });

    link.addEventListener("mouseleave", () => {
      hoverTL.reverse();
    });

    // Cleanup function to remove event listeners
    return () => {
      link?.removeEventListener("mouseenter", () => {
        hoverTL.play();
      });
      link?.removeEventListener("mouseleave", () => {
        hoverTL.reverse();
      });
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="wrapper">
      <a className="exp-link" href="#" target="_blank">
        <div className="exp-color"></div>
        <span>READ MORE</span>
        <i className="fa-solid fa-arrow-down"></i>

        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-down" /> */}
      </a>
    </div>
  );
}

export default CustomLink;
