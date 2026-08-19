import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Skills = () => {
  const [ref, isVisible] = useScrollReveal({
    threshold: 0.3,
    triggerOnce: false,
  });
  return (
    <section
      className={`skills section reveal reveal--right ${isVisible ? "reveal--visible" : ""}`}
      ref={ref}
      id="skills"
    >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
