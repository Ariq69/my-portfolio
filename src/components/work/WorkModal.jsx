import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const WorkModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // reset carousel position whenever a new/different project opens
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  if (!project) return null;

  const image = project.image || [];
  const hasMultiple = image.length > 1;

  const goPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1));
  };

  const goNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
  };

  return createPortal(
    <div className="workitems__modal" onClick={onClose}>
      <div
        className="workitems__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="workitems__modal-close" onClick={onClose}>
          <i className="bx bx-x"></i>
        </button>

        <div className="workitems__modal-left">
          <span className="workitems__modal-category">{project.category}</span>
          <h3 className="workitems__modal-title">{project.title}</h3>

          {project.date && (
            <span className="workitems__modal-date">
              <i className="bx bx-calendar"></i> {project.date}
            </span>
          )}

          <div className="workitems__modal-section">
            <span className="workitems__modal-label">Description</span>
            <p className="workitems__modal-desc">
              {project.longDescription || project.description}
            </p>
          </div>

          {project.techStack && (
            <div className="workitems__modal-section">
              <span className="workitems__modal-label">Technologies</span>
              <div className="workitems__modal-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="workitems__modal-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="workitems__modal-section">
            <span className="workitems__modal-label">Links</span>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="workitems__modal-link"
            >
              <i className="bx bxl-github"></i> GitHub
            </a>
          </div>
        </div>

        <div className="workitems__modal-right">
          <img
            loading="lazy"
            src={image[currentIndex]}
            alt={`${project.title} ${currentIndex + 1}`}
            className="workitems__modal-img"
          />

          {hasMultiple && (
            <>
              <button
                className="workitems__modal-arrow workitems__modal-arrow--prev"
                onClick={goPrev}
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              <button
                className="workitems__modal-arrow workitems__modal-arrow--next"
                onClick={goNext}
              >
                <i className="bx bx-chevron-right"></i>
              </button>

              <div className="workitems__modal-dots">
                {image.map((_, i) => (
                  <span
                    key={i}
                    className={`workitems__modal-dot ${
                      i === currentIndex ? "workitems__modal-dot--active" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(i);
                    }}
                  ></span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default WorkModal;
