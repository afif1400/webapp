import React from "react";

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section__title'>About Me</h2>
			<span className='section__subtitle'>Introduction</span>
			<div className='about__container container grid'>
				<img src='' alt='' className='about__img' />
				<div className='about__data'>
					<p className='about__description'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Praesentium, nostrum. Lorem ipsum dolor sit amet consectetur,
						adipisicing elit. Sunt, nisi.
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
