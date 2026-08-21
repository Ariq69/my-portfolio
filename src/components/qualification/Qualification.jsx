import React, { useState } from "react";
import "./qualification.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [ref, isVisible] = useScrollReveal({
    threshold: 0.3,
    triggerOnce: false,
  });
  return (
    <section
      className={`qualification section reveal reveal--left ${isVisible ? "reveal--visible" : ""}`}
      ref={ref}
    >
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  UIN Syarif Hidayatullah Jakarta
                </h3>
                <span className="qualification__subtitle">
                  Bachelor Informatics Engineering
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2020 - 2024
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">IT Programmer</h3>
                <span className="qualification__subtitle">
                  Rumah Sakit UIN Syarif Hidayatullah Jakarta
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> Jul 2024 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer Intern</h3>
                <span className="qualification__subtitle">Encryptix</span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> Dec 2024 - Jan 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Full Stack Web Developer Intern
                </h3>
                <span className="qualification__subtitle">
                  Rumah Sakit Haji Jakarta
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> Sep 2023 - Dec 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Wordpress Developer Intern
                </h3>
                <span className="qualification__subtitle">
                  MTS Negeri 13 Jakarta
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> Feb 2023 - Aug 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
