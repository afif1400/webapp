import React from "react";
import aboutImage from '../assets/about.png'

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section__title'>About Me</h2>
			<span className='section__subtitle'>Introduction</span>
			<div className='about__container container grid'>
				{/* <img src={aboutImage} alt='' className='about__img' /> */}
				<div className='about__data'>
					<p className='about__description'>
						I am a computer science student at PES University, Banglore. I like to build robust web application which are not only good looking but are also very fast. Oh.. buy the way I love typescript and the show rick and morty.
					</p>
					<div className='about__info'>
						<div>
							<span className='about__info-title'>2</span>
							<span className='about__info-name'>
								Years <br />
								experience
							</span>
						</div>
						<div>
							<span className='about__info-title'>10+</span>
							<span className='about__info-name'>
								Completed <br />
								Projects
							</span>
						</div>
						<div>
							<span className='about__info-title'>3+</span>
							<span className='about__info-name'>
								Componies <br />
								worked
							</span>
						</div>
					</div>
					<div className='about__buttons'>
						<a download='' href='#' className='button button--flex'>
							Docwnload CV
							<i className='uil uil-import button__icon'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
