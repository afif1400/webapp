import React from 'react'

const ProjectIdea = () => {
  return (
    <section className="project">
      <div className="project__bg">
        <div className="project__container container grid-container">
          <div className="project__data">
            <h2 className="project__title">
              Have a project in mind
            </h2>
            <p className="project__description">
              Let's discuss
            </p>
            <a href="#contact" className="button button--flex button--white">
              Connect with me
              <i className="uil uil-message project__icon button__icon"></i>
            </a>
          </div>
          <img src="" alt="" className="project__img" />
        </div>
      </div>

    </section>
  )
}

export default ProjectIdea
