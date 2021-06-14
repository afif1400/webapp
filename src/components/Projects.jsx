import React from 'react'
import Project from './Project'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const projects = [
  {
    image: 'https://res.cloudinary.com/charcha/image/upload/v1623439951/rick_bimw4m.png',
    title: "Rick and Morty Quotes",
    description: "A SPA built using netlify serverless functions which displays random quotes from the show rick and morty"
  },
  {
    image: "https://foundersguide.com/wp-content/uploads/2021/03/microservices.jpg",
    title: "Gittix",
    description: "This is a microserviced application built using express, nextjs and mongodb, deployed on a kubernetes cluster on Digital Ocean"
  },
  {
    image: "https://res.cloudinary.com/charcha/image/upload/v1623440307/inovact_unsxyq.png",
    title: "Inovact",
    description: "This is a MERN stack application where you can share your project and ideas."
  },

]

const Projects = () => {

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My recent works</span>
        <div className="portfolio__container container">
          <Swiper cssMode={true} navigation={true} pagination={{ clickable: true }} mousewheel={true} keyboard={true} className="mySwiper">
            {projects.map((project) => {
              return <SwiperSlide>
                <Project project={project} />
              </SwiperSlide>
            })}
          </Swiper>

        </div>
      </section>
    </div>
  )
}

export default Projects
