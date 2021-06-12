import React from 'react'


const Project = ({ project }) => {
  console.log(project)
  return (
    <div className="portfolio__content grid swiper-slide">
      <img src={project.image} alt="rick" className="portfolio__img" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">{project.title}</h3>
        <p className="portfolio__description">{project.description}</p>
        <a href="#" className="button button--flex button--small portfolio__button">
          Demo
          <i class="uil uil-airplay button__icon"></i>
        </a>
      </div>
    </div>
  )
}

export default Project
