// export default Backend;
import React from "react";
import { FaLaravel } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

// ===== Data skill (2 kolom seperti struktur asli) =====
const skillsGroups = [
  [
    { name: "PHP", level: "Intermediate", icon: <SiPhp /> },
    { name: "Laravel", level: "Intermediate", icon: <FaLaravel /> },
    { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
  ],
  [
    { name: "GIT", level: "Entry Level", icon: <FaGitAlt /> },
    { name: "REST APIs", level: "Entry Level", icon: <TbApi /> },
    { name: "Java", level: "Intermediate", icon: <FaJava /> },
  ],
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend and Tools</h3>

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

export default Backend;
