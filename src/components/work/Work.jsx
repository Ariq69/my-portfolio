import React from "react";
import Works from "./Works";
import "./work.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Work = () => {
  const [ref, isVisible] = useScrollReveal({
    // threshold: 0.3,
    threshold: 0.05, // small enough to trigger on tall stacked content
    rootMargin: "0px", // remove the negative bottom margin, or make it responsive
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
