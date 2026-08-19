import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

// ===== Data skill (2 kolom seperti struktur asli) =====
const skillsGroups = [
  [
    { name: "HTML", level: "Intermediate", icon: <FaHtml5 /> },
    { name: "CSS", level: "Intermediate", icon: <FaCss3Alt /> },
    { name: "Javascript", level: "Intermediate", icon: <IoLogoJavascript /> },
  ],
  [
    { name: "Bootstrap", level: "Intermediate", icon: <FaBootstrap /> },
    { name: "Tailwind", level: "Intermediate", icon: <RiTailwindCssFill /> },
    { name: "React js", level: "Entry Level", icon: <FaReact /> },
  ],
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        {skillsGroups.map((group, index) => (
          <div className="skills__group" key={index}>
            {group.map((skill) => (
              <div className="skills__data" key={skill.name}>
                {skill.icon}
                <div>
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
