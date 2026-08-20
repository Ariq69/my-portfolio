import React from "react";

const Workitems = ({ item, onPreview }) => {
  return (
    <div className="work__card" onClick={onPreview}>
      <div className="work__card-top">
        <div className="work__img-wrapper">
          {/* <img src={item.images[0]} alt={item.title} className="work__img" /> */}
          <img src={item.image?.[0]} alt={item.title} className="work__img" />
          <div className="work__overlay">
            <span className="work__preview-btn">
              <i className="bx bx-show"></i> Preview
            </span>
          </div>
        </div>
      </div>

      <div className="work__card-bottom">
        <h3 className="work__title">{item.title}</h3>
        <p className="work__desc">{item.description}</p>

        <div className="work__footer">
          <span className="work__date">{item.date || "—"}</span>
          <span className="work__button">
            Details <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Workitems;
