import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import Workitems from "./Workitems";
import WorkModal from "./WorkModal";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      setProjects(projectsData.filter((p) => p.category === item.name));
    }
  }, [item]);

  // Lock scroll saat modal terbuka + ESC to close
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const handleClick = (name, index) => {
    setItem({ name });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={() => handleClick(navItem.name, index)}
            className={`${active === index ? "active-work" : ""} work__item`}
            key={index}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((proj) => (
          <Workitems
            item={proj}
            key={proj.id}
            onPreview={() => setSelectedProject(proj)}
          />
        ))}
      </div>

      <WorkModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Works;
