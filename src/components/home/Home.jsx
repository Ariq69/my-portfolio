import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { useScrollReveal } from "../hooks/useScrollReveal";

import { SiPhp, SiMysql } from "react-icons/si";
import {
  FaLaravel,
  FaGitAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const marqueeIcons = [
  <SiPhp />,
  <FaLaravel />,
  <SiMysql />,
  <FaGitAlt />,
  <TbApi />,
  <FaJava />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <IoLogoJavascript />,
  <FaBootstrap />,
  <RiTailwindCssFill />,
  <FaReact />,
];

function Home() {
  const [ref, isVisible] = useScrollReveal({
    threshold: 0.3,
    // triggerOnce: false,
  });
  return (
    <section
      className={`home section reveal reveal--scale ${isVisible ? "reveal--visible" : ""}`}
      ref={ref}
      id="home"
    >
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>

        {/* marquee di antara Say Hello dan Scroll Down */}
        <div className="home__marquee">
          <div className="home__marquee-track">
            {[...marqueeIcons, ...marqueeIcons, ...marqueeIcons].map(
              (icon, i) => (
                <span className="home__marquee-icon" key={i}>
                  {icon}
                </span>
              ),
            )}
          </div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
