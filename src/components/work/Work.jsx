import React from "react";
import Works from "./Works";
import "./work.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Work = () => {
  const [ref, isVisible] = useScrollReveal({
    threshold: 0.3,
    triggerOnce: false,
  });
  return (
    <section
      className={`work section reveal ${isVisible ? "reveal--visible" : ""}`}
      ref={ref}
      id="portfolio"
    >
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent</span>
      <Works />
    </section>
  );
};

export default Work;
