import React from 'react'

const Info = () => {
  return (
    <div>
      <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1 Years Internship</span>
        </div>
        <div className="about__box">
            <i class="bx bx-briefcase-alt-2 about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">2 + Projects</span>
        </div>
        <div className="about__box">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
      </div>
    </div>
  )
}

export default Info
